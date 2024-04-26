<script lang="ts">
	import { client } from '$lib/trpc/client';
	import { getUserDetails } from '$lib/stores/user';

	let username = '';
	let password = '';
	let error = '';

	let hello: string;

	async function login() {
		const user = await getUserDetails(username, password);
		if (user) {
			if (error) error = '';
			hello = await client.hello.hello.query({ name: 'You' });
		} else {
			error = 'Incorrect username and password.';
		}
	}

	async function logout() {

		// hello = await client.hello.hello.query({ name: 'Logout' });
	}


</script>

{#if hello}
	<p>{hello}</p>
	<button on:click={logout}>logout</button>
{:else}
	<form on:submit|preventDefault={login} class="flex mx-auto col-6">
		<div class="mb-3">
			<label for="username" class="form-label">Username</label>
			<input type="text" class="form-control" id="username" bind:value={username} />
		</div>

		<div class="mb-3">
			<label for="password" class="form-label">Password</label>
			<input type="password" class="form-control" id="password" bind:value={password} />
		</div>

		<button type="submit" class="btn btn-primary">Submit</button>
		<div id="error_message" class="text-danger">
			<small>{error}</small>
		</div>
	</form>
{/if}
