<script lang="ts">
	import { Circle } from 'svelte-loading-spinners/src';

	import { page } from '$app/stores';

	let loaded = false;
	let loading = false;

	$: $page.params.uid, load();

	async function load() {
		if (loading) return;
		loading = true;

		loaded = true;
		loading = false;
	}
</script>

{#if loading}
	<div class="wrapper flex flex-col items-center justify-center">
		<Circle color="#9CA3AF" />
	</div>
{:else if loaded}
	Dit is artikel {$page.params.uid}
{:else}
	<div class="wrapper flex flex-col items-center justify-center gap-6">
		<h2 class="text-4xl font-semibold">Artikel niet gevonden</h2>
		<p>Dit artikel bestaat niet of is verwijderd.</p>
	</div>
{/if}
