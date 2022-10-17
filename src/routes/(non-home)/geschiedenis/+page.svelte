<script>
	import Fa from 'svelte-fa';
	import { faHourglass } from '@fortawesome/free-regular-svg-icons';

	import Line from '../../../components/general/line.svelte';
	import TeamCard from '../../../components/general/teamCard.svelte';

	import Timeline from '../../../components/history/timeline.svelte';
	import Contribute from '../../../components/history/contribute.svelte';
</script>

<main class="flex flex-col items-center w-full">
	<div class="flex flex-col items-center w-full">
		<article
			class="absolute flex justify-between 2xl:w-3/5 sm:w-4/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4"
		>
			<div class="w-4/5">
				<h1 class="text-7xl font-semibold mb-8">De geschiedenis van Egel</h1>
				<p class="text-2xl">
					Egel heeft een rijke geschiedenis, beginnend in de 1e klas in 2017 en sindsdien is er erg
					veel gebeurd.
					<br />
					Deze pagina is er om ons de mogelijkheid te geven onze belangrijke momenten op te slaan, zodat
					ze nooit vergeten worden. Hier staan ze allemaal op een rijtje in een interactieve tijdlijn.
				</p>
			</div>
			<Fa
				style="font-size: 24rem;"
				class="absolute left-3/4 text-purple-500/20 rotate-12"
				icon={faHourglass}
			/>
		</article>
	</div>
	<div style="margin-bottom: 84vh;" />
	<Line />
	<Timeline />
	<div class="flex flex-col items-center relative w-full my-12 bg-gray-200">
		<Line color="bg-gray-300" />
		<div class="background1 absolute -top-96 h-96 w-full -z-40" />

		<Contribute />

		<div class="background2 absolute -bottom-96 h-96 w-full -z-40" />
		<Line color="bg-gray-300" />
	</div>
</main>

<style lang="scss">
	.background1 {
		background-image: -webkit-linear-gradient(95deg, rgb(229 231 235) 50%, white 50.3%);
	}

	.background2 {
		background-image: -webkit-linear-gradient(95deg, white 50%, rgb(229 231 235) 50.3%);
	}
</style>
