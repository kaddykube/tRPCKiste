<script lang="ts">
</script>

<svelte:head>
	<title>Application</title>
</svelte:head>

<header></header>

<main>
  <div class="container">
	<h4>app</h4>
	<slot />
</div>
</main>

<footer />

<style>
  main {
    padding: 20px;
  position: relative;
  }

	.container {
    position: relative;
		display: flex;
		flex-direction: column;
		border: 2px solid greenyellow;
		padding: 20px;
    font-family: 'Courier New', Courier, monospace;
    font-weight: 700;
	}

  h4, h5 {  font-size: 1.2rem}
</style>
