import { error, type RequestEvent } from '@sveltejs/kit';
import { setAuthorizationCookie } from '$lib/server/cookies/index.js';
import { createContext } from '$lib/trpc/context';
import { trpc } from '$lib/trpc/trpc';
import { router } from '$lib/trpc/router';

export async function POST(event: RequestEvent) {
    const { request, cookies } = event;
    
    const ctx = await createContext(event);
    const createCaller = trpc.createCallerFactory(router);
    const caller = createCaller(ctx);

    const { name, password } = await request.json();


   const isValid = await caller.signIn.checkUser({
        name,
        password,
    }); 

    if (!isValid) {
        throw error(403, {
            message: 'Forbidden',
        });
    }

    
    setAuthorizationCookie(cookies, isValid);

    return new Response(null, { status: 200 });
}
