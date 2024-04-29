<script lang="ts">
	import { client } from '$lib/trpc/client';

	let error = '';

	let hello: string;

	async function showHello() {
		if (error) error = '';
		hello = await client.hello.hello.query({ name: 'You' });
	}

	const onLogout = async () => {
    };
</script>

{#if hello}
	<p>{hello}</p>
	<button on:click={onLogout}>logout</button>
{:else}
	<form on:submit|preventDefault={showHello} class="flex mx-auto col-6">
		<button type="submit" class="btn btn-primary">Sag Hallo</button>
		<div id="error_message" class="text-danger">
			<small>{error}</small>
		</div>
	</form>
{/if}
