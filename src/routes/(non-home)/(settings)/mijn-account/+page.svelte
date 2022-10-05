<script lang="ts">
	import Fa from 'svelte-fa';
	import {
		faGoogle,
		faYoutube,
		faReddit,
		faTwitter,
		faGithub
	} from '@fortawesome/free-brands-svg-icons';
	import { authStore } from '../../../../stores/auth';

	import PfPic from '../../../../components/settings/pfPic.svelte';
	import Username from '../../../../components/settings/username.svelte';
	import Bio from '../../../../components/settings/bio.svelte';
	import Links from '../../../../components/settings/links.svelte';

	$: $authStore, console.log($authStore);
</script>

{#if $authStore.user}
	<div class="flex flex-col p-8 items-center justify-center bg-gray-200/50 rounded-md">
		<div class="flex items-center justify-center">
			<div class="relative flex flex-col items-center justify-center mr-6">
				<h2 class="text-4xl mb-2">
					<b>{$authStore.username || $authStore.user.displayName}</b>
				</h2>
				<h4 class="flex items-center justify-center text-lg">
					<Fa icon={faGoogle} class="text-lg text-gray-500 mr-2" />
					{$authStore.user.displayName}
				</h4>
				{#if $authStore.links}
					<div class="absolute -bottom-10 flex justify-center w-3/5 gap-2">
						{#if $authStore.links.youtube}
							<a href={$authStore.links.youtube} target="_blank">
								<Fa icon={faYoutube} class="text-2xl text-red-500" />
							</a>
						{/if}
						{#if $authStore.links.reddit}
							<a href={$authStore.links.reddit} target="_blank">
								<Fa icon={faReddit} class="text-2xl text-orange-600" />
							</a>
						{/if}
						{#if $authStore.links.twitter}
							<a href={$authStore.links.twitter} target="_blank">
								<Fa icon={faTwitter} class="text-2xl text-blue-400" />
							</a>
						{/if}
						{#if $authStore.links.github}
							<a href={$authStore.links.github} target="_blank">
								<Fa icon={faGithub} class="text-2xl text-gray-800" />
							</a>
						{/if}
					</div>
				{/if}
			</div>
			<PfPic />
		</div>
		{#if $authStore.bio}
			<div class="w-4/5 mt-6">
				<h3 class="font-semibold">Over mij:</h3>
				<p>{$authStore.bio}</p>
			</div>
		{/if}
	</div>
	<div class="grid grid-cols-2 gap-4 mt-6">
		<!-- All of these are forms with which the user can change their account data -->
		<Username />
		<Bio />
		<Links />
	</div>
{/if}
