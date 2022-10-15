<script lang="ts">
	export let imgUrl: string = '';
	export let videoUrl: string = '';

	export let title: string = '';
	export let description: string = '';

	import { getEmbedUrl } from '../../scripts/ytEmbedUrl';
</script>

<div class="flex flex-col justify-center p-4 bg-gray-200 rounded-lg shadow-lg">
	{#if imgUrl}
		<img src={imgUrl} class="image w-full rounded-md" alt="post" />
	{:else if videoUrl}
		<!-- svelte-ignore a11y-media-has-caption -->
		<!-- svelte-ignore a11y-missing-attribute -->
		<iframe
			class="w-full aspect-video rounded-md"
			src={getEmbedUrl(videoUrl)}
			frameborder="0"
			allow=""
			allowfullscreen
		/>
	{/if}
	{#if title}
		<h4 class="text-lg font-semibold my-2">{title}</h4>
	{/if}
	{#if description}
		<p class="text-lg">{description}</p>
	{/if}
</div>
