import type { RequestEvent } from '@sveltejs/kit';
import type { inferAsyncReturnType } from '@trpc/server';

export async function createContext(event: RequestEvent) {
    const user = event.locals;

    return {
        user,
    };
}

export type Context = inferAsyncReturnType<typeof createContext>;
