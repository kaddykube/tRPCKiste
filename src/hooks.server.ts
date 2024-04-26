import { router } from '$lib/trpc/router';
import { sequence } from '@sveltejs/kit/hooks';
import { createTRPCHandle } from '$lib/trpc/handle';
import { createContext } from '$lib/trpc/context';
import type { Handle } from '@sveltejs/kit';

const auth: Handle = async ({ event, resolve }) => {


    return await resolve(event);
};

const trpc: Handle = createTRPCHandle({ router, createContext });

export const handle = sequence(auth, trpc);
