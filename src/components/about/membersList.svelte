<script lang="ts">
	import Fa from 'svelte-fa';
	import { faUser } from '@fortawesome/free-solid-svg-icons';

	import type { UserDB } from '../../models/user';
	import { getAcceptedUsers } from '../../database/users';
	import { authStore } from '../../stores/auth';

	let members: UserDB[] = [];

	async function awaitMembers() {
		members = await getAcceptedUsers();
	}

	awaitMembers();
</script>

<div class="2xl:w-3/5 sm:w-4/5 my-12">
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
			<ul class="grid grid-cols-4 w-full -mb-4 gap-4">
				{#each members as member}
					<a
						href={`/egelaars/${member.uid}`}
						class="flex items-center gap-2 p-2 text-xl font-semibold hover:bg-gray-300/50 rounded-lg transition"
					>
						{#if member.pfPic}
							<img src={member.pfPic} class="w-12 rounded-full" alt="Profile Pic" />
						{:else}
							<div
								class="flex items-center justify-center text-xl w-12 h-12 rounded-full bg-purple-300"
							>
								<Fa icon={faUser} />
							</div>
						{/if}
						<p class={`${$authStore.username == member.username ? 'text-purple-500' : ''}`}>
							{member.username}
						</p>
					</a>
				{/each}
			</ul>
		{:else}
			Er zijn nog geen leden toegevoegd!{/if}
	</div>
</div>
