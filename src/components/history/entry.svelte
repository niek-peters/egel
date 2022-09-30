<script lang="ts">
	export let date: string;
	export let title: string;
	export let description: string;
	export let img: string | undefined;
</script>

<article class="flex flex-col w-full p-16">
	<h2 class="text-4xl font-semibold mb-4 border-b border-gray-200 pb-3">{date}</h2>
	<div class="flex justify-between">
		<div class="w-2/3 pr-8">
			<h4 class="text-xl font-semibold mb-4">{title}</h4>
			<p>{description}</p>
		</div>
		{#if img}
			<img class="rounded-lg w-1/3 max-h-full" src={img} alt="blyaat" />
		{/if}
	</div>
</article>

<style>
	article {
		height: 34rem;
	}
</style>
