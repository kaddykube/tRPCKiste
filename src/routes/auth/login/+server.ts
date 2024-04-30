import { error, type RequestEvent } from '@sveltejs/kit';
import { setAuthorizationCookie } from '$lib/server/cookies/index.js';
import { checkUser } from '../../utils';

export async function POST(event: RequestEvent) {
    const { request, cookies } = event;

    const { name, password } = await request.json();

    const setTokenValid = checkUser(name, password);

    if (!setTokenValid) {
        throw error(403, {
            message: 'Forbidden',
        });
    }

    setAuthorizationCookie(cookies, '0000');

    return new Response(null, { status: 200 });
}
