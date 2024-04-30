import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoadEvent } from './$types';
import { createContext } from '$lib/trpc/context';

export const load = async (event: LayoutServerLoadEvent) => {
    const { session } = event.locals;

    if (!session) {
        throw redirect(307, '/auth/login');
    }

    if (session.user.id !== 'id1') {
        throw redirect(302, '/');
    }

    const ctx = await createContext(event);

    const param = 'home';
    return {
        param,
    };
};