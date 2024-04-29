import type { Cookies } from '@sveltejs/kit';
import { dev } from '$app/environment';
import { NODE_ENV } from '$env/static/private';

export function setAuthorizationCookie(cookies: Cookies, accessToken: string) {
    cookies.set('AuthorizationToken', `Bearer ${accessToken}`, {
        httpOnly: true,
        secure: NODE_ENV === 'production' || !dev,
        sameSite: 'strict',
        maxAge: 60 * 60 * 24,
        path: '/',
    });
}

export async function parseAuthorizationCookie(cookies: Cookies) {
    const authCookie = cookies.get('AuthorizationToken');

    if (authCookie) {
        try {
            const token = authCookie.split(' ')[1];

            return {id: 'id1'};
        } catch (error) {
            console.error(error);
        }
    }

    return null;
}
