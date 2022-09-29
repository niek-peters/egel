<script lang="ts">
	import type { Member } from '../../models/member';
	import { getMembers } from '../../database/member';

	let members: Member[] = [];

	async function awaitMembers() {
		members = await getMembers();
	}

	awaitMembers();
</script>

<div class="2xl:w-3/5 sm:w-4/5">
	<article class="w-full mb-12">
		<h1 class="text-4xl font-semibold mb-4 border-b border-gray-300 pb-3">
			Leden van de Egel Community
		</h1>
		<p class="text-lg">
			Hier zie je een lijst van erkende leden van de Egel Community. Wil jij hier ook tussen staan?
			Log dan in op deze site en vraag in de Discord server of we je kunnen toevoegen.
		</p>
	</article>
	<div class="flex justify-between">
		{#if members.length}
			<ul class="grid grid-cols-5 w-full -mb-4">
				{#each members as member}
					<li class="flex items-center justify-center p-8 text-xl font-semibold">
						{member.username}
					</li>
				{/each}
			</ul>
		{:else}
			Er zijn nog geen leden toegevoegd!{/if}
	</div>
</div>
