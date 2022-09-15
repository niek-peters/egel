<script>
	import ImgCard from '../components/about/imgCard.svelte';
	import FullCard from '../components/about/fullCard.svelte';
	import Line from '../components/general/line.svelte';
</script>

<main class="flex flex-col items-center w-full">
	<!-- Introduction -->
	<div class="relative flex flex-col items-center w-full">
		<ImgCard img="/ronde-egel.png" title="Egel Community"
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
		<ImgCard img="/ronde-egel.png" title="Egel Gamers" right
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
			<div class="w-1/2">
				<h1 class="text-4xl font-semibold mb-4 border-b border-gray-300 pb-3">
					Onze Discord server
				</h1>
				<p class="text-lg">
					De Egel Community heeft ook een Discord server! Hier kunt u de online leden van de server
					zien. Interesse om deel te nemen? Neem contact op met: egelblad@gmail.com.
					<br />
					De Discord server is ons hoofdkwartier, hier worden al onze snode plannen gesmeed. We zijn
					constant bezig u te scam- eh, uw ervaring te verbeteren natuurlijk.
				</p>
			</div>
			<iframe
				class="w-2/5 h-96 shadow-2xl"
				src="https://discord.com/widget?id=614885752207310879&theme=dark"
				title="Discord Widget"
				allowtransparency={true}
				frameborder="0"
				sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
			/>
		</article>

		<div class="background2 absolute -bottom-96 h-96 w-full -z-40" />
	</div>
	<div class="relative flex flex-col items-center w-full">
		<FullCard title="Egel Developers" />
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
