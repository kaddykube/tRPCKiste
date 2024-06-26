import { parseAuthorizationCookie } from '$lib/server/cookies';
import type { RequestEvent } from '@sveltejs/kit';
import type { inferAsyncReturnType } from '@trpc/server';

export async function createContext(event: RequestEvent) {
    /** wird durch handler bei jedem request neu aufgerufen */
    const user = await parseAuthorizationCookie(event.cookies);

    return {
        user,
    };
}

export type Context = inferAsyncReturnType<typeof createContext>;
