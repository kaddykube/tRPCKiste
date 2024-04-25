import type { Router } from '$lib/trpc/router';
import { httpBatchLink } from '@trpc/client';
import { createTRPCClient } from 'trpc-sveltekit';

export const client = createTRPCClient<Router>({
    links: [
        httpBatchLink({
            url: '/api/trpc',
        }),
    ],
});