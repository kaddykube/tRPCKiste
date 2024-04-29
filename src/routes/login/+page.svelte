<script lang="ts">
	import { goto } from '$app/navigation';

	let username = '';
	let password = '';

	let loginFailed = false;

	async function login() {
		const response = await fetch('/login', {
			method: 'POST',
			body: JSON.stringify({
				name: username,
				password: password
			})
		});
		if (response.status === 200) {
			goto('/');
		} else {
			loginFailed = true;
		}
	}
</script>

<form on:submit|preventDefault={login} class="flex mx-auto col-6">
	<div class="mb-3">
		<label for="username" class="form-label">Username</label>
		<input type="text" class="form-control" id="username" bind:value={username} />
	</div>

	<div class="mb-3">
		<label for="password" class="form-label">Password</label>
		<input type="password" class="form-control" id="password" bind:value={password} />
	</div>

	<button type="submit" class="btn btn-primary">Login</button>

</form>
{#if loginFailed}
	<p class="text-verdiRed text-sm text-center">Login nicht möglich.</p>
{/if}
