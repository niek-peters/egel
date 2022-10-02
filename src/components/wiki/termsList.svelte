<script lang="ts">
	import Fa from 'svelte-fa';
	import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

	import FullCard from '../general/fullCard.svelte';
	import { getTerms } from '../../database/terms';
	import type { Term } from '../../models/term';

	let terms: Term[] = [];

	async function awaitTerms() {
		terms = await getTerms();
	}

	awaitTerms();

	function toggleDefinition(event: Event) {
		let target = event.target as HTMLElement;
		let icon = target.querySelector('svg');
		if (!target || !icon) return;

		icon.classList.toggle('rotate-90');
	}

	function toggleHover(event: Event) {
		let target = event.target as HTMLElement;
		let detail = target.parentNode as HTMLElement;
		if (!target || !detail) return;

		detail.classList.toggle('hover:bg-gray-300/30');
	}
</script>

<FullCard title="Termen en definities" id="termen">
	{#if terms.length}
		<ul class="w-full -mb-4">
			{#each terms as word}
				<details class="w-full mb-4 bg-gray-300/20 rounded-lg transition">
					<summary
						class=" list-none cursor-pointer text-lg font-semibold"
						on:click={toggleDefinition}
						on:mouseenter={toggleHover}
						on:mouseleave={toggleHover}
					>
						<div class="flex justify-between items-center p-4">
							{word.term}<Fa icon={faAngleRight} class="transition" />
						</div></summary
					>
					<p class="border-t pt-2 pb-4 text-lg mx-4">{word.definition}</p>
				</details>
			{/each}
		</ul>
	{:else}
		Er zijn nog geen termen en definities toegevoegd!{/if}
</FullCard>
