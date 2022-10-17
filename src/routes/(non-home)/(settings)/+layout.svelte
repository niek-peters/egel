<script lang="ts">
	import Fa from 'svelte-fa';
	import { faAddressCard, faTrashCan } from '@fortawesome/free-regular-svg-icons';

	import { page } from '$app/stores';

	import FullCard from '../../../components/general/cards/fullCard.svelte';
</script>

<FullCard title="Instellingen">
	<div class="wrapper flex">
		<nav class="flex flex-col pr-4 mr-4 w-80 border-r border-gray-200">
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
				href="/gevarenzone"
				class="flex items-center bg-gray-200 hover:bg-gray-300 text-red-600 mb-2 rounded-lg h-12 pl-4 transition overflow-hidden"
				><Fa icon={faTrashCan} class="mr-3 text-xl" />Gevarenzone
				<div
					class={`${
						$page.routeId == '(non-home)/(settings)/gevarenzone' ? 'bg-purple-400' : ''
					} h-full w-3 ml-auto`}
				/></a
			>
		</nav>
		<div class="slot w-full h-full overflow-y-auto pr-4">
			<slot />
		</div>
	</div>
</FullCard>

<style lang="scss">
	.wrapper {
		height: 31rem;
	}

	.slot {
		/* width */
		&::-webkit-scrollbar {
			width: 0.4rem;
		}

		/* Track */
		&::-webkit-scrollbar-track {
			background: #e0e0e0;
			border-radius: 0.5rem;
		}

		/* Handle */
		&::-webkit-scrollbar-thumb {
			background: #999;
			border-radius: 0.5rem;
		}

		/* Handle on hover */
		&::-webkit-scrollbar-thumb:hover {
			background: #888;
		}
	}
</style>
