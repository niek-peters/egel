<script lang="ts">
	export let title: string = 'A title';
	export let img: string = 'Some text';
	export let right: boolean = false;
</script>

<article class="flex justify-between my-16 w-3/5 h-96 items-center">
	{#if !right}
		<img class="w-2/6 shadow-2xl rounded-full" src={img} alt={`${title} logo`} />
	{/if}
	<div class="w-3/5 p-16 bg-gray-50 rounded-lg shadow-md">
		<h2 class="text-4xl font-semibold mb-4 border-b border-gray-200 pb-3">{title}</h2>
		<p class="text-lg">
			<slot />
		</p>
	</div>
	{#if right}
		<img class="w-2/6 shadow-2xl rounded-full" src={img} alt={`${title} logo`} />
	{/if}
</article>
