<script lang="ts">
	import Post from './post.svelte';
	import type { PostType } from '../../models/post';
	import { postsStore } from '../../stores/posts';
	import { browser } from '$app/environment';

	let loaded = false;
	let filling = false;

	let col1Posts: PostType[] = [];
	let col2Posts: PostType[] = [];

	$: $postsStore, console.log('postsStore:', $postsStore);
	$: $postsStore, fillGallery();

	async function fillGallery() {
		if (!browser) return;
		if (filling) return;

		filling = true;

		col1Posts = [];
		col2Posts = [];

		let col1Skips = 0;
		let col2Skips = 0;

		for (let i = 0; i < $postsStore.length; i++) {
			const imgUrl = $postsStore[i].imgUrl;

			if (col1Skips) {
				col2Posts = [...col2Posts, $postsStore[i]];
				col1Skips--;
			} else if (col2Skips) {
				col1Posts = [...col1Posts, $postsStore[i]];
				col2Skips--;
			} else if (i % 2 === 0) {
				col1Posts = [...col1Posts, $postsStore[i]];
			} else {
				col2Posts = [...col2Posts, $postsStore[i]];
			}

			if (imgUrl) {
				await new Promise<void>((res, rej) => {
					const img = new Image();

					img.addEventListener('load', function () {
						const ratio = this.naturalHeight / this.naturalWidth;
						const skips = Math.round(ratio / 0.75);

						if (ratio > 0.5625) {
							if (i % 2 === 0) {
								col1Skips = skips;
							} else {
								col2Skips = skips;
							}

							res();
						}
						res();
					});

					img.src = imgUrl;
				});
			}
		}

		loaded = true;

		filling = false;

		console.log('posts', $postsStore);
		console.log('col1Posts', col1Posts);
		console.log('col2Posts', col2Posts);
	}
</script>

{#if loaded}
	<div class="w-full flex gap-8">
		<div class="flex flex-col gap-8 w-1/2">
			{#each col1Posts as post}
				{#if post.imgUrl}
					<Post imgUrl={post.imgUrl} title={post.title} description={post.description} />
				{:else if post.videoUrl}
					<Post videoUrl={post.videoUrl} title={post.title} description={post.description} />
				{/if}
			{/each}
		</div>

		<div class="flex flex-col gap-8 w-1/2">
			{#each col2Posts as post}
				{#if post.imgUrl}
					<Post imgUrl={post.imgUrl} title={post.title} description={post.description} />
				{:else if post.videoUrl}
					<Post videoUrl={post.videoUrl} title={post.title} description={post.description} />
				{/if}
			{/each}
		</div>
	</div>
{/if}
