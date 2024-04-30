<script lang="ts">
	import { client } from '$lib/trpc/client';

	let error = '';

	let hello: string;

	async function showHello() {
		if (error) error = '';
		hello = await client.hello.hello.query({ name: 'You' });
	}

</script>

{#if hello}
	<p>{hello}</p>
{:else}
	<form on:submit|preventDefault={showHello} class="flex mx-auto col-6">
		<button type="submit" class="btn btn-primary">Sag Hallo</button>
		<div id="error_message" class="text-danger">
			<small>{error}</small>
		</div>
	</form>
{/if}
