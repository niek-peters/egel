<script>
	import Fa from 'svelte-fa';
	import { faNewspaper, faHourglass, faUser } from '@fortawesome/free-regular-svg-icons';
	import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

	import ImgCard from '../../components/general/cards/imgCard.svelte';
	import Line from '../../components/general/line.svelte';
	import Link from '../../components/general/link.svelte';

	import MembersList from '../../components/about/membersList.svelte';
	import Timeline from '../../components/about/history/timeline.svelte';
</script>

<main class="flex flex-col items-center w-full">
	<!-- Introduction -->
	<article
		class="absolute flex justify-between 2xl:w-3/5 sm:w-4/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
	>
		<div class="w-2/3">
			<h1 class="text-9xl font-semibold mt-8 mb-16">Wij zijn Egel</h1>
			<p class="text-4xl mb-6">
				Op deze website vindt u wie wij zijn, wat wij doen en wat wij hebben meegemaakt
			</p>
			<div class="flex justify-center w-fit">
				<a
					class="flex justify-center items-center w-fit text-xl text-white bg-gray-700 hover:bg-gray-800 transition rounded-full py-1 px-4 m-2"
					href="/nieuws"
				>
					<Fa class="mr-3" icon={faNewspaper} /> Nieuws <Fa class="ml-3" icon={faChevronRight} />
				</a>
				<a
					class="flex justify-center items-center w-fit text-xl text-purple-600 hover:text-purple-800 transition py-1 px-4 m-2"
					href="#tijdlijn"
				>
					<Fa class="mr-3" icon={faHourglass} /> Tijdlijn <Fa class="ml-3" icon={faChevronRight} />
				</a>
				<a
					class="flex justify-center items-center w-fit text-xl text-purple-600 hover:text-purple-800 transition py-1 px-4 m-2"
					href="#leden"
				>
					<Fa class="mr-3" icon={faUser} /> Leden <Fa class="ml-3" icon={faChevronRight} />
				</a>
			</div>
		</div>
		<img
			class="absolute top-1/2 left-2/3 -translate-y-1/2 w-2/5 aspect-square rounded-lg shadow-2xl"
			src="egelleeft.png"
			alt="Egel foto"
		/>
	</article>
	<div style="margin-bottom: 84vh;" />
	<Line id="tijdlijn" />

	<!-- History -->
	<Timeline />

	<!-- Ledenlijst -->
	<div class="relative flex flex-col items-center bg-gray-200 w-full" id="leden">
		<div class="background1 absolute -top-96 h-96 w-full -z-40" />
		<Line color="bg-gray-300" />

		<MembersList />

		<Line color="bg-gray-300" />
		<div class="background2 absolute -bottom-96 h-96 w-full -z-40" />
	</div>
	<!-- Community and Gamers -->
	<div class="relative flex flex-col items-center w-full">
		<ImgCard img="/egelleeft.png" title="Egel Community"
			><p>
				De Egel Community is een grote vriendengroep van Egelaars, voornamelijk van het <Link
					title="Pantarijn
				MHV in Wageningen"
					url="https://www.pantarijn.nl/wageningenmhv"
				/>. We hebben we een hechte band met elkaar en houden ervan om samen feestjes te houden of
				gewoon lekker te chillen.
				<br />
				Deze vriendengroep heeft een rijke <Link title="geschiedenis" url="#tijdlijn" />, beginnend
				in de 1e klas in 2017. Door de jaren heen is de groep flink gegroeid: tegenwoordig hebben we
				meer dan 40 leden!
			</p></ImgCard
		>
		<Line />
		<ImgCard img="/egelgamers.jpg" title="Egel Gamers" right
			><p>
				Een groot deel van de Egel Community bestaat uit gamers. De meeste hiervan komen uit de
				groep originele Egelaars uit de 1e klas. Samen spelen we games als CS:GO, Minecraft, Hearts
				of Iron 4 en SCP Secret Laboratory.
				<br />
				We houden vaak vriendelijke toernooien of spelen 's avonds gezellig samen.
			</p></ImgCard
		>
	</div>
</main>

<style>
	.background1 {
		background-image: -webkit-linear-gradient(95deg, rgb(229 231 235) 50%, white 50.3%);
	}

	.background2 {
		background-image: -webkit-linear-gradient(95deg, white 50%, rgb(229 231 235) 50.3%);
	}
</style>
