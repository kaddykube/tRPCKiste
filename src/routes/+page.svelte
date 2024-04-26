<script lang="ts">
	import { client} from '$lib/trpc/client';
	import { onMount } from 'svelte';
	let hello: string;

	onMount(async() => { await client.hello.hello.query({name: 'name'}) });
</script>

<p>{hello}</p>