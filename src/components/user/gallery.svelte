<script lang="ts">
	import { onMount } from 'svelte';
	import Post from './post.svelte';
	import type { PostType } from '../../models/post';

	export let posts: PostType[];
	let loaded = false;

	let col1Posts: PostType[] = [];
	let col2Posts: PostType[] = [];

	onMount(async () => {
		let col1Skips = 0;
		let col2Skips = 0;

		console.log(posts);

		for (let i = 0; i < posts.length; i++) {
			const imgUrl = posts[i].imgUrl;

			console.log('col1', col1Skips);
			console.log('col2', col2Skips);

			if (col1Skips) {
				console.log('col2');
				col2Posts = [...col2Posts, posts[i]];
				col1Skips--;
			} else if (col2Skips) {
				console.log('col1');
				col1Posts = [...col1Posts, posts[i]];
				col2Skips--;
			} else if (i % 2 === 0) {
				console.log('col1');
				col1Posts = [...col1Posts, posts[i]];
			} else {
				console.log('col2');
				col2Posts = [...col2Posts, posts[i]];
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

			console.log('i', i);
		}

		console.log(col1Posts);
		console.log(col2Posts);

		loaded = true;
	});
</script>

{#if loaded}
	<div class="flex gap-8">
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
