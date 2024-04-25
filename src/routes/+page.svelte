<script lang="ts">
	import { trpc } from '$lib/trpc/client';
	import { onMount } from 'svelte';

	let greeting = 'load data';

	onMount(async () => {
		greeting = await trpc().greeting.query();
	});
</script>

<p>{greeting}</p>
