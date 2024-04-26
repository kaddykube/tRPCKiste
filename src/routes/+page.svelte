<script lang="ts">
	import { client} from '$lib/trpc/client';
	import { onMount } from 'svelte';
	let hello: string;

	onMount(async() => { hello = await client.hello.hello.query({name: 'Haus'}) });
</script>

<p>{hello}</p>