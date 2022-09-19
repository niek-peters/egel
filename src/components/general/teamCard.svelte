<script lang="ts">
	import FullCard from '../general/fullCard.svelte';
	import SquareImg from '../about/squareImg.svelte';

	export let title: string = 'Egelaars';

	export let title1: string = 'Egel';
	export let title2: string = 'Egel';
	export let title3: string = 'Egel';
	export let title4: string = 'Egel';

	export let img1: string = '/egelleeft.png';
	export let img2: string = '/egelleeft.png';
	export let img3: string = '/egelleeft.png';
	export let img4: string = '/egelleeft.png';
</script>

<div class="flex flex-col items-center w-full">
	<FullCard {title}>
		<slot />
		<div class="flex justify-between mt-8">
			<SquareImg title={title1} img={img1} />
			<SquareImg title={title2} img={img2} />
			<SquareImg title={title3} img={img3} />
			<SquareImg title={title4} img={img4} />
		</div>
	</FullCard>
</div>
