import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoadEvent } from './$types';

export const load = async (event: LayoutServerLoadEvent) => {
    const { session } = event.locals;

    if (!session) {
        throw redirect(307, '/auth/login');
    }

    const param = 'home';
    return {
        param,
    };
};