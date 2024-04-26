import { trpc } from '$lib/trpc/trpc';
import { helloRouter } from './hello';


export const router = trpc.router({
    hello: helloRouter,
});

export type AppRouter = typeof router;
