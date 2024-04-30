import { trpc } from '$lib/trpc/trpc';
import { TRPCError } from '@trpc/server';

const isLoggedIn = trpc.middleware(async ({ ctx, next }) => {

    const { user } = ctx;

    console.log('user ', user);

    if (user === null ) {
        throw new TRPCError({ code: 'UNAUTHORIZED' });
    }

    return next({ ctx });
});

export const requireLogin = trpc.procedure.use(isLoggedIn);