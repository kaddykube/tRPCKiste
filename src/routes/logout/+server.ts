import { redirect, type RequestEvent } from '@sveltejs/kit';

export async function POST(event: RequestEvent) {
    const { locals, cookies } = event;
    cookies.delete('AuthorizationToken', {
        path: '/',
    });

    locals.session = undefined;

    redirect(307, '/login');

}