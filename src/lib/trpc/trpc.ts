import { initTRPC } from '@trpc/server';
import type { Context } from '$lib/trpc/context';

export const trpc = initTRPC.context<Context>().create({
});
