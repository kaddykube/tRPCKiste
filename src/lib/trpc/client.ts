import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '$lib/trpc/router';

export const client = createTRPCProxyClient<AppRouter>({
    links: [
        httpBatchLink({
            url: '/api/trpc',
        }),
    ],
});
