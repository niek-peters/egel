<script>
	import Fa from 'svelte-fa';
	import { faHourglass } from '@fortawesome/free-regular-svg-icons';

	import Line from '../../../components/general/line.svelte';
	import Entry from '../../../components/history/entry.svelte';
	import TeamCard from '../../../components/general/teamCard.svelte';

	import ImgButton from '../../../components/history/imgButton.svelte';
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
					ze nooit vergeten worden. Hier staan ze allemaal op een rijtje in een interactieve tijdlijn
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
	<div class="2xl:w-3/5 sm:w-4/5 my-12">
		<h2 class="w-full text-4xl font-semibold mb-4 border-b border-gray-300 pb-3">Tijdlijn</h2>
		<div
			class="timeline overflow-y-auto flex flex-col justify-between w-full bg-gray-100 rounded-lg shadow-md"
		>
			<div class="inner">
				<Entry img="/egelleeft.png" />
				<Entry img="/egelleeft.png" />
				<Entry img="/egelleeft.png" />
				<Entry img="/egelleeft.png" />
			</div>
		</div>
	</div>
	<div class="flex flex-col items-center relative w-full my-12 bg-gray-200">
		<Line color="bg-gray-300" />
		<div class="background1 absolute -top-96 h-96 w-full -z-40" />

		<div class="2xl:w-3/5 sm:w-4/5">
			<article class="w-full mb-12">
				<h1 class="text-4xl font-semibold mb-4 border-b border-gray-300 pb-3">
					Bijdragen aan de tijdlijn
				</h1>
				<p class="text-lg">
					Heb je interesse in het helpen bij het opschrijven van belangrijke gebeurtenissen binnen
					Egel? Stuur hier dan de informatie over de gebeurtenis en potentieel een afbeelding op
					naar de Egel Historians! Alle inzendingen worden eerst gecontroleerd voordat ze toegevoegd
					worden aan de tijdbalk.
					<br />
					Voor vragen over de richtlijnen om te volgen bij je inzending, kun je terecht in de Discord
					server.
				</p>
			</article>
			<form class="flex justify-between">
				<div class="w-1/3 mr-8">
					<label for="title" class="block text-lg font-semibold mb-2">Titel</label>
					<input
						type="text"
						name="title"
						id="title"
						class="w-full rounded-lg border outline-none border-gray-300 p-2 mb-4 focus:border-purple-500 transition"
					/>
					<label for="title" class="block text-lg font-semibold mb-2">Datum</label>
					<input
						type="date"
						name="title"
						id="title"
						class="w-full rounded-lg border outline-none border-gray-300 p-2 mb-4 focus:border-purple-500 transition"
					/>
					<label for="description" class="block text-lg font-semibold mb-2">Beschrijving</label>
					<textarea
						name="description"
						id="description"
						class="w-full  rounded-lg border outline-none border-gray-300 p-2 mb-4 focus:border-purple-500 transition"
					/>
					<button
						type="submit"
						class="w-full rounded-lg border outline-none border-gray-300 p-2 mb-2 text-white bg-purple-400 hover:bg-purple-500 transition"
					>
						Verstuur
					</button>
				</div>

				<ImgButton />
			</form>
		</div>

		<div class="background2 absolute -bottom-96 h-96 w-full -z-40" />
		<Line color="bg-gray-300" />
	</div>

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

	.background1 {
		background-image: -webkit-linear-gradient(95deg, rgb(229 231 235) 50%, white 50.3%);
	}

	.background2 {
		background-image: -webkit-linear-gradient(95deg, white 50%, rgb(229 231 235) 50.3%);
	}
</style>
