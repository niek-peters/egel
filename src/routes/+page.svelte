<script>
	import Card from '../components/about/card.svelte';
</script>

<main class="relative flex flex-col items-center w-full">
	<Card img="/ronde-egel.png" title="Egel Community"
		>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim vitae erat a ultricies.
		Nam in vehicula nibh. Maecenas ornare mauris ut libero interdum, ut dignissim lorem congue. Nam
		luctus id nisl quis feugiat. Suspendisse feugiat ex imperdiet, porttitor ante sed, condimentum
		sapien. Integer nisi sem, facilisis sed porttitor in, porttitor et velit.</Card
	>
	<div class="background absolute top-96 h-4/6 w-full -z-40" />
	<Card img="/ronde-egel.png" title="Egel Gamers" right
		>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim vitae erat a ultricies.
		Nam in vehicula nibh. Maecenas ornare mauris ut libero interdum, ut dignissim lorem congue. Nam
		luctus id nisl quis feugiat. Suspendisse feugiat ex imperdiet, porttitor ante sed, condimentum
		sapien. Integer nisi sem, facilisis sed porttitor in, porttitor et velit.</Card
	>
</main>

<style>
	.background {
		background-image: -webkit-linear-gradient(87deg, rgb(229 231 235) 50%, white 50.3%);
	}
</style>
