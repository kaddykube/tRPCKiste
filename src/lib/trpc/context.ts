import type { RequestEvent } from '@sveltejs/kit';
import type { inferAsyncReturnType } from '@trpc/server';

export async function createContext(event: RequestEvent) {
    /* get cookie data null / id */
    const user = '';

    return {
        user,
    };
}

export type Context = inferAsyncReturnType<typeof createContext>;
