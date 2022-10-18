<script lang="ts">
	import Fa from 'svelte-fa';
	import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

	import { getEmbedUrl } from '../../scripts/ytEmbedUrl';
	import { deletePost } from '../../database/posts';
	import { reloadPosts } from '../../stores/posts';
	import { authStore } from '../../stores/auth';
	import { page } from '$app/stores';

	import LinkWrapper from '../general/linkWrapper.svelte';

	export let uid: string;
	export let title: string;
	export let description: string;

	export let imgUrl: string = '';
	export let videoUrl: string = '';

	async function processDelete() {
		if (!$authStore.user) return;

		if (confirm('Weet je zeker dat je deze post wilt verwijderen?')) {
			await deletePost(uid);

			reloadPosts($authStore.user.uid);
		}
	}
</script>

<div class="relative flex flex-col justify-center p-4 bg-gray-200 rounded-lg shadow-lg">
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
		<LinkWrapper text={description} styles="text-lg" />
	{/if}
	{#if $authStore.user != null && $page.params.uid == $authStore.user.uid}
		<button on:click={processDelete}>
			<Fa
				icon={faTrashCan}
				class="absolute top-3 right-3 text-2xl text-red-500 hover:text-red-600 cursor-pointer"
			/>
		</button>
	{/if}
</div>
