// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
            session?: {
                user: {
                    id: string;
                };
            };
        }
	}
}

export {};
