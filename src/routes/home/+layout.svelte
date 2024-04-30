<script lang="ts">
	import { goto } from '$app/navigation';
	import type { LayoutServerData } from './$types';

	export let data: LayoutServerData;

	const onLogout = async () => {
		await fetch('/auth/logout', {
			method: 'post'
		});
		goto('/auth/login');
	};

</script>

<h5>inside folder</h5>
<p>{data.param} 
    <button class='button' on:click={onLogout}>Logout</button></p>


<slot/>

<style>
    .button { text-align: center;
        width: 100px;
    }
</style>
