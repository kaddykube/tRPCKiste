<script lang="ts">
	import { client } from '$lib/trpc/client';
	import { onMount } from 'svelte';

	let greeting = {message : ''};
	
	onMount(async () => {
		//greeting = await client.greeting.query();
		greeting = {message : 'error'};
	});
</script>
<p>{greeting?.message}</p>
