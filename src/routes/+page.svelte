<script>
	import ImgCard from '../components/about/imgCard.svelte';
	import FullCard from '../components/about/fullCard.svelte';
	import Line from '../components/general/line.svelte';
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
	<div class="flex flex-col items-center w-full">
		<FullCard title="Egel Developers">
			<p>
				Binnen de Egel Community hebben we ook ons eigen developer team! Makers van <a
					class="text-purple-500 hover:text-purple-700 border-b border-transparent hover:border-purple-700 transition"
					target="_blank"
					href="https://niek.coderschool.eu/">Egelblad</a
				>,
				<a
					class="text-purple-500 hover:text-purple-700 border-b border-transparent hover:border-purple-700 transition"
					target="_blank"
					href="https://dev.egelbank.nl/">Egelbank</a
				>,
				<a
					class="text-purple-500 hover:text-purple-700 border-b border-transparent hover:border-purple-700 transition"
					target="_blank"
					href="https://github.com/Egel-Developers/egel-mods-installer">Egel Mods Installer</a
				>, deze website en nog veel meer!
			</p>
			<div class="flex justify-between mt-8">
				<div class="flex flex-col items-center w-1/5">
					<p class="text-xl font-semibold mb-2">MeneerValk</p>
					<img
						class="aspect-square w-full rounded-md"
						src="/meneervalk.png"
						alt="MeneerValk profielfoto"
					/>
				</div>
				<div class="flex flex-col items-center w-1/5">
					<p class="text-xl font-semibold mb-2">Milanutje</p>
					<img
						class="aspect-square w-full rounded-md"
						src="/milanutje.png"
						alt="Milanutje profielfoto"
					/>
				</div>
				<div class="flex flex-col items-center w-1/5">
					<p class="text-xl font-semibold mb-2">Motrix</p>
					<img class="aspect-square w-full rounded-md" src="/motrix.png" alt="Motrix profielfoto" />
				</div>
				<div class="flex flex-col items-center w-1/5">
					<p class="text-xl font-semibold mb-2">Goeloes</p>
					<img
						class="aspect-square w-full rounded-md"
						src="/goeloes.png"
						alt="Goeloes profielfoto"
					/>
				</div>
			</div>
		</FullCard>
	</div>
	<Line />
	<!-- Creators card -->
	<div class="flex flex-col items-center w-full">
		<FullCard title="Egel Creators">
			<p>
				Naast developers hebben we ook creatief talent! Deze leden hebben stukken gecomponeerd en
				geremixt als <a
					class="text-purple-500 hover:text-purple-700 border-b border-transparent hover:border-purple-700 transition"
					target="_blank"
					href="https://www.youtube.com/watch?v=4jdLJ1bIPGY">Kernenergie</a
				>,
				<a
					class="text-purple-500 hover:text-purple-700 border-b border-transparent hover:border-purple-700 transition"
					target="_blank"
					href="https://www.youtube.com/watch?v=MalS05AYzxo">J.O.R.N.A</a
				>,
				<a
					class="text-purple-500 hover:text-purple-700 border-b border-transparent hover:border-purple-700 transition"
					target="_blank"
					href="https://www.youtube.com/watch?v=15wC98k9ujo">Gnoerks OST</a
				>,
				<a
					class="text-purple-500 hover:text-purple-700 border-b border-transparent hover:border-purple-700 transition"
					target="_blank"
					href="https://www.youtube.com/watch?v=ikWX_cCDaSU">Joep Remix</a
				>
				en
				<a
					class="text-purple-500 hover:text-purple-700 border-b border-transparent hover:border-purple-700 transition"
					target="_blank"
					href="https://www.youtube.com/watch?v=dD1tov0H8cM">Meindert Remix</a
				>. Naast muziek zijn er ook video's gemaakt als
				<a
					class="text-purple-500 hover:text-purple-700 border-b border-transparent hover:border-purple-700 transition"
					target="_blank"
					href="https://www.youtube.com/watch?v=7HBZ_6j4maY">Ceaseless</a
				>,
				<a
					class="text-purple-500 hover:text-purple-700 border-b border-transparent hover:border-purple-700 transition"
					target="_blank"
					href="https://www.youtube.com/watch?v=mT2yGQxk-lY">Buurman en Buurman</a
				>,
				<a
					class="text-purple-500 hover:text-purple-700 border-b border-transparent hover:border-purple-700 transition"
					target="_blank"
					href="https://www.youtube.com/watch?v=5m8TZo3jPYo">Compromised Trailer</a
				>,
				<a
					class="text-purple-500 hover:text-purple-700 border-b border-transparent hover:border-purple-700 transition"
					target="_blank"
					href="https://www.youtube.com/watch?v=pi84ZXaCgHk">De Achterblijvers</a
				>,
				<a
					class="text-purple-500 hover:text-purple-700 border-b border-transparent hover:border-purple-700 transition"
					target="_blank"
					href="https://www.youtube.com/watch?v=r2rns2vXI80">Egel Nieuws</a
				>
				en
				<a
					class="text-purple-500 hover:text-purple-700 border-b border-transparent hover:border-purple-700 transition"
					target="_blank"
					href="https://www.youtube.com/watch?v=7hTUwwgzHE8">SCP-SL Compilations</a
				>. Ten slotte ook nog
				<a
					class="text-purple-500 hover:text-purple-700 border-b border-transparent hover:border-purple-700 transition"
					href="/kunst">mooie kunst van Labrat</a
				>.
			</p>
			<div class="flex justify-between mt-8">
				<div class="flex flex-col items-center w-1/5">
					<p class="text-xl font-semibold mb-2">Wouter van der Ven</p>
					<img class="aspect-square w-full rounded-md" src="/wouter.png" alt="Wouter profielfoto" />
				</div>
				<div class="flex flex-col items-center w-1/5">
					<p class="text-xl font-semibold mb-2">Milanutje</p>
					<img
						class="aspect-square w-full rounded-md"
						src="/milanutje.png"
						alt="Milanutje profielfoto"
					/>
				</div>
				<div class="flex flex-col items-center w-1/5">
					<p class="text-xl font-semibold mb-2">Motrix</p>
					<img class="aspect-square w-full rounded-md" src="/motrix.png" alt="Motrix profielfoto" />
				</div>
				<div class="flex flex-col items-center w-1/5">
					<p class="text-xl font-semibold mb-2">Labrat</p>
					<img class="aspect-square w-full rounded-md" src="/kunst3.jpg" alt="Labrat profielfoto" />
				</div>
			</div>
		</FullCard>
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
