import { trpc } from '$lib/trpc/trpc';
import { helloRouter } from './hello';
import { signInRouter } from './signIn';

export const router = trpc.router({
    hello: helloRouter,
    signIn: signInRouter,
});

export type AppRouter = typeof router;
