<script>
	import Fa from 'svelte-fa';
	import { faHourglass } from '@fortawesome/free-regular-svg-icons';

	import Line from '../../../components/general/line.svelte';
	import Entry from '../../../components/history/entry.svelte';
	import TeamCard from '../../../components/general/teamCard.svelte';
</script>

<main class="flex flex-col items-center w-full">
	<div class="relative flex flex-col items-center w-full">
		<article class="relative flex justify-between mt-28 mb-12 2xl:w-3/5 sm:w-4/5">
			<div class="w-4/5">
				<h1 class="text-7xl font-semibold mb-8">De geschiedenis van Egel</h1>
				<p class="text-2xl">
					Egel heeft een rijke geschiedenis, beginnend in de 1e klas in 2017 en sindsdien is er erg
					veel gebeurd.
					<br />
					Deze pagina is er om ons de mogelijkheid te geven onze belangrijke momenten op te slaan, zodat
					ze nooit vergeten worden. Hier staan ze allemaal op een rijtje in een interactieve tijdlijn
				</p>
			</div>
			<Fa
				style="font-size: 24rem;"
				class="absolute left-2/3 text-purple-500/20 rotate-12"
				icon={faHourglass}
			/>
		</article>
	</div>
	<div style="margin-bottom: 22vh;" />
	<Line />
	<div class="2xl:w-3/5 sm:w-4/5">
		<h2 class="text-4xl font-semibold mb-4 border-b border-gray-300 pb-3">Tijdlijn</h2>
	</div>
	<div
		class="timeline overflow-y-auto flex flex-col justify-between my-12 2xl:w-3/5 sm:w-4/5 bg-gray-100 rounded-lg shadow-md"
	>
		<div class="inner">
			<Entry img="/egelleeft.png" />
			<Entry img="/egelleeft.png" />
			<Entry img="/egelleeft.png" />
			<Entry img="/egelleeft.png" />
		</div>
	</div>

	<Line />
	<TeamCard
		title="Egel Historians"
		title1="MeneerValk"
		title2="Bogdan"
		title3="Motrix"
		title4="Goeloes"
		img1="/meneervalk.png"
		img2="/bogdan.jpg"
		img3="/motrix.png"
		img4="/goeloes.png"
	>
		<p>
			De geschiedenis schrijft zichzelf niet! Dankzij deze leden is de geschiedenis van Egel
			bijgehouden en opgeschreven. Als je vragen hebt over de geschiedenis van Egel, weet je bij wie
			je moet zijn.
		</p>
	</TeamCard>
</main>

<style lang="scss">
	.timeline {
		height: 34rem;

		transform: scaleX(-1);

		.inner {
			transform: scaleX(-1);
		}

		/* width */
		&::-webkit-scrollbar {
			width: 1rem;
		}

		/* Track */
		&::-webkit-scrollbar-track {
			background: linear-gradient(magenta, rgb(65, 10, 154));
			border-radius: 0 0.5rem 0.5rem 0;
		}

		/* Handle */
		&::-webkit-scrollbar-thumb {
			background: rgba(255, 255, 255, 0.25);
			border-radius: 0 0.5rem 0.5rem 0;
		}

		/* Handle on hover */
		&::-webkit-scrollbar-thumb:hover {
			background: rgba(255, 255, 255, 0.4);
		}
	}
</style>
