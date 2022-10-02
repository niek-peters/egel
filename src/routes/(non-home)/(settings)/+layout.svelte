<script lang="ts">
	import Fa from 'svelte-fa';
	import { faAddressCard, faTrashCan } from '@fortawesome/free-regular-svg-icons';
	import { faUser } from '@fortawesome/free-solid-svg-icons';

	import { page } from '$app/stores';

	import FullCard from '../../../components/general/fullCard.svelte';
</script>

<FullCard title="Instellingen">
	<div class="wrapper flex">
		<nav class="flex flex-col pr-8 mr-4 w-fit border-r border-gray-200">
			<a
				href="/mijn-account"
				class="flex items-center bg-gray-200 hover:bg-gray-300 mb-2 rounded-lg h-12 pl-4 transition overflow-hidden"
				><Fa icon={faAddressCard} class="mr-3 text-xl" />Mijn account
				<div
					class={`${
						$page.routeId == '(non-home)/(settings)/mijn-account' ? 'bg-purple-400' : ''
					} h-full w-3 ml-auto`}
				/></a
			>
			<a
				href="/profiel"
				class="flex items-center bg-gray-200 hover:bg-gray-300 mb-2 rounded-lg h-12 pl-4 transition overflow-hidden"
				><Fa icon={faUser} class="mr-3 text-xl" />Profiel
				<div
					class={`${
						$page.routeId == '(non-home)/(settings)/profiel' ? 'bg-purple-400' : ''
					} h-full w-3 ml-auto`}
				/></a
			>
			<button
				class="flex items-center mb-2 mt-auto bg-red-300 hover:bg-red-400 rounded-lg h-12 px-4 transition"
				><Fa icon={faTrashCan} class="mr-3 text-xl" />Account verwijderen</button
			>
		</nav>
		<slot />
	</div>
</FullCard>

<style>
	.wrapper {
		height: 52vh;
	}
</style>
