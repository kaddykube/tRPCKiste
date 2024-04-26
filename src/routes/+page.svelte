<script lang="ts">
	/**VIA 
	 * https://raqueebuddinaziz.com/blog/how-to-setup-trpc-in-a-sveltekit-project/ 
	 * erstellt
	 * */
	import { browser } from '$app/environment';
	import { trpc } from '$lib/trpc';
	import { onMount } from 'svelte';

	let name: string;
	let output: string;
	let hey: string;

	$: if (browser) {
		name && trpc.greet.query({ name }).then((value) => (output = value));}

	onMount(async() => { trpc.hello.query().then((value) => (hey = value)); });
</script>

<input bind:value={name} />
<p>{output}</p>
<p>{hey}</p>