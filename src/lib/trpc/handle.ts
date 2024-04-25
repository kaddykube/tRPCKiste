import { resolveHTTPResponse } from '@trpc/server/http';
import type { Handle, RequestEvent } from '@sveltejs/kit';
import type { AnyRouter, Dict, inferRouterContext } from '@trpc/server';

export function createTRPCHandle<Router extends AnyRouter>({
    router,
    url = '/api/trpc',
    createContext,
}: {
    router: Router;
    url?: string;
    createContext?: (event: RequestEvent) => Promise<inferRouterContext<Router>>;
}): Handle {
    return async ({ event, resolve }) => {
        if (event.url.pathname.startsWith(url)) {
            const request = event.request as Request & {
                headers: Dict<string | string[]>;
            };

            const req = {
                method: request.method,
                headers: request.headers,
                query: event.url.searchParams,
                body: await request.text(),
            };

            const httpResponse = await resolveHTTPResponse({
                router,
                req,
                path: event.url.pathname.substring(url.length + 1),
                createContext: async () => createContext?.(event),
            });

            const { status, headers, body } = httpResponse as {
                status: number;
                headers: Record<string, string>;
                body: string;
            };

            return new Response(body, { status, headers });
        }

        return resolve(event);
    };
}