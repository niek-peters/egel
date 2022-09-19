<script lang="ts">
	export let date: string = '13 September 2022';
	export let title: string = 'Bogdan wordt eindelijk 10';
	export let text: string = 'BLYATTTTTTTTTTTTTTTTTTT';
	export let img: string | undefined;
</script>

<article class="flex flex-col w-full p-16">
	<h2 class="text-4xl font-semibold mb-4 border-b border-gray-200 pb-3">{date}</h2>
	<div class="flex justify-between">
		<div>
			<h4 class="text-xl font-semibold mb-4">{title}</h4>
			<p>{text}</p>
		</div>
		{#if img}
			<img class="rounded-lg w-1/3 max-h-full" src={img} alt="blyaat" />
		{/if}
	</div>
</article>
