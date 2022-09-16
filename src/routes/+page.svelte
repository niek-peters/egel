<script>
	import Fa from 'svelte-fa';
	import { faNewspaper, faHourglass, faUser } from '@fortawesome/free-regular-svg-icons';
	import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

	import ImgCard from '../components/about/imgCard.svelte';
	import Line from '../components/general/line.svelte';

	import Link from '../components/general/link.svelte';

	import TeamCard from '../components/about/teamCard.svelte';
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
					href="/"
				>
					<Fa class="mr-3" icon={faNewspaper} /> Nieuws <Fa class="ml-3" icon={faChevronRight} />
				</a>
				<a
					class="flex justify-center items-center w-fit text-xl text-purple-600 hover:text-purple-800 transition py-1 px-4 m-2"
					href="/"
				>
					<Fa class="mr-3" icon={faHourglass} /> Tijdbalk <Fa class="ml-3" icon={faChevronRight} />
				</a>
				<a
					class="flex justify-center items-center w-fit text-xl text-purple-600 hover:text-purple-800 transition py-1 px-4 m-2"
					href="/"
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
	<Line />
	<!-- Community and Gamers -->
	<div class="relative flex flex-col items-center w-full">
		<ImgCard img="/egelleeft.png" title="Egel Community"
			><p>
				De Egel Community is een grote vriendengroep van Egelaars, voornamelijk van het Pantarijn
				MHV in Wageningen. We hebben we een hechte band met elkaar en houden ervan om samen feestjes
				te houden of gewoon lekker te chillen.
				<br />
				Deze vriendengroep heeft een rijke geschiedenis, beginnend in de 1e klas in 2017. Door de jaren
				heen is de groep flink gegroeid: tegenwoordig hebben we meer dan 40 leden!
			</p></ImgCard
		>
		<Line />
		<div class="background1 absolute bottom-0 h-96 w-full -z-40" />
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
	<!-- Discord Widget -->
	<div class="relative flex flex-col items-center bg-gray-200 w-full">
		<Line color="bg-gray-300" />
		<article class="relative flex justify-between my-12 2xl:w-3/5 sm:w-4/5">
			<div class="w-1/3">
				<h1 class="text-4xl font-semibold mb-4 border-b border-gray-300 pb-3">
					Onze Discord server
				</h1>
				<p class="text-lg">
					De Egel Community heeft ook een Discord server! Hier kunt u de online leden van de server
					zien. Interesse om deel te nemen? Neem contact op met: egelblad@gmail.com.
					<br /><br />
					De Discord server is ons hoofdkwartier, hier worden al onze snode plannen gesmeed. Hier spelen
					we onze favoriete games en houden we gezellige gesprekken. Het is dé online hangplek voor de
					Egel Community!
				</p>
			</div>
			<iframe
				class="w-3/5 h-96 shadow-2xl"
				src="https://discord.com/widget?id=614885752207310879&theme=dark"
				title="Discord Widget"
				allowtransparency={true}
				frameborder="0"
				sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
			/>
		</article>

		<Line color="bg-gray-300" />
		<div class="background2 absolute -bottom-96 h-96 w-full -z-40" />
	</div>
	<!-- Developer team card -->
	<TeamCard
		title="Egel Developers"
		title1="MeneerValk"
		title2="Milanutje"
		title3="Motrix"
		title4="Goeloes"
		img1="/meneervalk.png"
		img2="/milanutje.png"
		img3="/motrix.png"
		img4="/goeloes.png"
	>
		<p>
			Binnen de Egel Community hebben we ook ons eigen developer team! Makers van
			<Link title="Egelblad" url="https://niek.coderschool.eu/" blank />, <Link
				title="Egelbank"
				url="https://dev.egelbank.nl/"
				blank
			/>, <Link
				title="Egel Mods Installer"
				url="https://github.com/Egel-Developers/egel-mods-installer"
				blank
			/>, deze website en nog veel meer!
		</p>
	</TeamCard>

	<Line />
	<!-- Creators card -->
	<TeamCard
		title="Egel Creators"
		title1="Wouter van der Ven"
		title2="Milanutje"
		title3="Motrix"
		title4="Bogdan"
		img1="/wouter.png"
		img2="/milanutje.png"
		img3="/motrix.png"
		img4="/bogdan.jpg"
	>
		<p>
			Naast developers hebben we ook creatief talent! Deze leden hebben stukken gecomponeerd en
			geremixt als
			<Link
				title="Kernenergie"
				url="https://open.spotify.com/track/7yDWbmBBHzy2CWFRojeTbn?si=99e282145268426c"
				blank
			/>,
			<Link title="J.O.R.N.A" url="https://www.youtube.com/watch?v=MalS05AYzxo" blank />,
			<Link title="Gnoerks OST" url="https://www.youtube.com/watch?v=15wC98k9ujo" blank />,
			<Link title="Joep Remix" url="https://www.youtube.com/watch?v=ikWX_cCDaSU" blank />
			en
			<Link title="Meindert Remix" url="https://www.youtube.com/watch?v=dD1tov0H8cM" blank />
			. Naast muziek zijn er ook video's gemaakt als
			<Link title="Ceaseless" url="https://www.youtube.com/watch?v=7HBZ_6j4maY" blank />,
			<Link title="Buurman en Buurman" url="https://www.youtube.com/watch?v=mT2yGQxk-lY" blank />,
			<Link title="Compromised Trailer" url="https://www.youtube.com/watch?v=5m8TZo3jPYo" blank />,
			<Link title="De Achterblijvers" url="https://www.youtube.com/watch?v=pi84ZXaCgHk" blank />,
			<Link title="Egel Nieuws" url="https://www.youtube.com/watch?v=r2rns2vXI80" blank />

			en
			<Link title="SCP-SL Compilations" url="https://www.youtube.com/watch?v=7hTUwwgzHE8" blank />
			. Ten slotte ook nog
			<Link title="geweldige artikelen van Bogdan" url="https://niek.coderschool.eu/" blank />.
		</p>
	</TeamCard>
</main>

<style>
	.background1 {
		background-image: -webkit-linear-gradient(95deg, rgb(229 231 235) 50%, white 50.3%);
	}

	.background2 {
		background-image: -webkit-linear-gradient(95deg, white 50%, rgb(229 231 235) 50.3%);
	}
</style>
