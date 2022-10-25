<script>
	import Fa from 'svelte-fa';
	import { faNewspaper } from '@fortawesome/free-regular-svg-icons';

	import Line from '../../../components/general/line.svelte';
	import Slider from '../../../components/news/slider.svelte';
	import NewsGallery from '../../../components/news/newsGallery.svelte';
</script>

<main class="flex flex-col items-center w-full">
	<div class="flex flex-col items-center w-full -mb-6">
		<article class="relative mt-12 flex justify-between 2xl:w-3/5 sm:w-4/5">
			<div class="w-4/5">
				<h1 class="text-7xl font-semibold mb-8">Het nieuwste van Egel</h1>
			</div>
			<Fa
				style="font-size: 24rem;"
				class="absolute left-3/4 text-white/40 rotate-12 -z-10 -top-3/4"
				icon={faNewspaper}
			/>
		</article>
	</div>
	<!-- <Line color="bg-white/30" /> -->
	<Slider />
	<Line />
	<NewsGallery />
</main>

<!-- <style lang="scss">
	.background1 {
		background-image: -webkit-linear-gradient(95deg, rgb(229 231 235) 50%, white 50.3%);
	}

	.background2 {
		background-image: -webkit-linear-gradient(95deg, white 50%, rgb(229 231 235) 50.3%);
	}
</style> -->
