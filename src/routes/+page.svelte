<script>
	import ImgCard from '../components/about/imgCard.svelte';
	import FullCard from '../components/about/fullCard.svelte';
	import Line from '../components/general/line.svelte';

	import SquareImg from '../components/about/squareImg.svelte';
	import Link from '../components/general/link.svelte';

	import TeamCard from '../components/about/teamCard.svelte';
</script>

<main class="flex flex-col items-center w-full">
	<!-- Introduction -->
	<div class="relative flex flex-col items-center w-full">
		<ImgCard img="/egelleeft.png" title="Egel Community"
			><p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim vitae erat a
				ultricies. Nam in vehicula nibh. Maecenas ornare mauris ut libero interdum, ut dignissim
				lorem congue. Nam luctus id nisl quis feugiat. Suspendisse feugiat ex imperdiet, porttitor
				ante sed, condimentum sapien. Integer nisi sem, facilisis sed porttitor in, porttitor et
				velit.
			</p></ImgCard
		>
		<Line />
		<div class="background1 absolute bottom-0 h-96 w-full -z-40" />
		<ImgCard img="/egelleeft.png" title="Egel Gamers" right
			><p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim vitae erat a
				ultricies. Nam in vehicula nibh. Maecenas ornare mauris ut libero interdum, ut dignissim
				lorem congue. Nam luctus id nisl quis feugiat. Suspendisse feugiat ex imperdiet, porttitor
				ante sed, condimentum sapien. Integer nisi sem, facilisis sed porttitor in, porttitor et
				velit.
			</p></ImgCard
		>
	</div>
	<!-- Discord Widget -->
	<div class="relative flex flex-col items-center bg-gray-200 w-full">
		<Line color="bg-gray-300" />
		<article class="relative flex justify-between my-12 w-3/5 ">
			<div class="w-1/3">
				<h1 class="text-4xl font-semibold mb-4 border-b border-gray-300 pb-3">
					Onze Discord server
				</h1>
				<p class="text-lg">
					De Egel Community heeft ook een Discord server! Hier kunt u de online leden van de server
					zien. Interesse om deel te nemen? Neem contact op met: egelblad@gmail.com.
					<br /><br />
					De Discord server is ons hoofdkwartier, hier worden al onze snode plannen gesmeed. We zijn
					constant bezig u te scam- eh, uw ervaring te verbeteren natuurlijk.
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
		title4="Labrat"
		img1="/wouter.png"
		img2="/milanutje.png"
		img3="/motrix.png"
		img4="/kunst3.jpg"
	>
		<p>
			Naast developers hebben we ook creatief talent! Deze leden hebben stukken gecomponeerd en
			geremixt als
			<Link title="Kernenergie" url="https://www.youtube.com/watch?v=4jdLJ1bIPGY" blank />,
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
			<Link title="mooie kunst van Labrat" url="/kunst" />.
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
