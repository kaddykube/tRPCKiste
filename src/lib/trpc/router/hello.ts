import { z } from 'zod';
import { trpc } from '$lib/trpc/trpc';
import { requireLogin } from '../middleware/login';

export const helloRouter = trpc.router({
	hello: requireLogin
		.input(
			z.object({
				name: z.string().min(1)
			})
		)
		.query(async (req) => {
			const { name } = req.input;
				return `Hello ${name}`;
		})
});
