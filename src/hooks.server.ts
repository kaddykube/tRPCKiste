import { router } from '$lib/trpc/router';
import { sequence } from '@sveltejs/kit/hooks';
import { createTRPCHandle } from '$lib/trpc/handle';
import { createContext } from '$lib/trpc/context';
import type { Handle } from '@sveltejs/kit';
import { parseAuthorizationCookie } from '$lib/server/cookies';

const login: Handle = async ({ event, resolve }) => {
    const user = await parseAuthorizationCookie(event.cookies);

    if (user) {
        event.locals.session = {
            user: user,
        };
    }

    return await resolve(event);
};

const trpc: Handle = createTRPCHandle({ router, createContext });

export const handle = sequence(login, trpc);

