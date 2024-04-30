import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
    const { session } = event.locals;

    if (session) {
        throw redirect(307, '/home');
    }
};