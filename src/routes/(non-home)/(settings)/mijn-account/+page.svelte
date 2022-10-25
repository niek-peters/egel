<script lang="ts">
	import Fa from 'svelte-fa';
	import { faGoogle } from '@fortawesome/free-brands-svg-icons';
	import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
	import { authStore } from '../../../../stores/auth';

	import PfPic from '../../../../components/settings/changePfPic.svelte';
	import Username from '../../../../components/settings/changeUsername.svelte';
	import Bio from '../../../../components/settings/changeBio.svelte';
	import Links from '../../../../components/settings/changeLink.svelte';
	import Other from '../../../../components/settings/changeOther.svelte';
	import LinksList from '../../../../components/user/linksList.svelte';

	// $: $authStore, console.log($authStore);
</script>

{#if $authStore.user}
	<div class="flex flex-col p-8 items-center justify-center bg-gray-200/50 rounded-md">
		<div class="flex items-center justify-center">
			<div class="relative flex flex-col items-center justify-center mr-6">
				<h2 class="flex items-center gap-2 text-4xl mb-2">
					{#if $authStore.accepted}
						<div class="accepted relative flex items-center justify-center rounded-full">
							<Fa icon={faCheckCircle} class="text-purple-400" />
						</div>
					{/if}
					<a class="font-bold" href={`/egelaars/${$authStore.user.uid}`}
						>{$authStore.username || $authStore.user.displayName}</a
					>
				</h2>
				{#if $authStore.user.displayName !== $authStore.username}
					<h4 class="flex items-center justify-center text-lg">
						<Fa icon={faGoogle} class="text-lg text-gray-500 mr-2" />
						{$authStore.user.displayName}
					</h4>
				{/if}

				<LinksList links={$authStore.links} />
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
		<Other />
	</div>
{/if}

<style lang="scss">
	.accepted {
		&::after {
			content: 'Erkend Egel lid';
			position: absolute;
			display: flex;
			justify-content: center;
			top: -3.25rem;
			font-size: 1rem;
			white-space: nowrap;
			border-radius: 0.5rem;
			width: 8rem;
			background-color: rgb(209 213 219);
			opacity: 0;
			transition: opacity 150ms ease;
		}

		&:hover::after {
			opacity: 1;
		}
	}
</style>
