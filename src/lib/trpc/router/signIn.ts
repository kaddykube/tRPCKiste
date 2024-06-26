import { z } from 'zod';
import { trpc } from '$lib/trpc/trpc';
import { createAccessToken } from '$lib/server/jwt';

export const signInRouter = trpc.router({
	checkUser: trpc.procedure
		.input(
			z.object({
				name: z.string().min(1),
				password: z.string().min(1)
			})
		)
		.query(async (req) => {
			const { name, password } = req.input;
			const user = { name: 'user', password: '123' };
			if (name == user.name && password == user.password) {
                const  token = createAccessToken({
                    name: user.name
                });
                return token;
			} else {
				return null;
			}
		})
});
