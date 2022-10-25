<script lang="ts">
	import type { NewsItem } from '../../models/news';

	export let newsItem: NewsItem;
</script>

<article
	class="flex flex-col gap-4 bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition"
>
	<a href={`/nieuws/${newsItem.uid}`}>
		<img class="aspect-video object-cover " src={newsItem.image} alt={newsItem.title} />
	</a>
	<a href={`/nieuws/${newsItem.uid}`}
		><h2 class="mx-4 text-xl font-semibold">{newsItem.title}</h2>
	</a>
	<p class="mx-4">{newsItem.description}</p>
	<section class="flex flex-col mt-auto text-gray-500 m-4">
		<p class="text-lg font-semibold">
			{newsItem.location} | {newsItem.date}
		</p>
		<a href={`/egelaars/${newsItem.authorId}`} class="text-lg hover:underline">{newsItem.author}</a>
	</section>
</article>
