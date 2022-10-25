<script lang="ts">
	import Fa from 'svelte-fa';
	import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
	// import { fade } from 'svelte/transition';

	import { onMount } from 'svelte';
	import type { NewsItem } from '../../models/news';

	let current = 0;
	let timer: NodeJS.Timer;
	let interval = 8000;
	let cycling = false;

	let title: HTMLHeadingElement;
	let description: HTMLParagraphElement;
	let other: HTMLDivElement;

	function cycleTo(index: number) {
		if (cycling) return;
		cycling = true;

		clearTimeout(timer);
		timer = setTimeout(cycleNext, interval);

		animateCycle(index);

		setTimeout(() => {
			current = index;
			cycling = false;
		}, 150);
	}

	function cycleNext() {
		cycleTo((current + 1) % newsItems.length);
	}

	function cyclePrevious() {
		cycleTo((current - 1 + newsItems.length) % newsItems.length);
	}

	function animateCycle(index: number) {
		if (!title || !description || !other) return;

		title.classList.add('text-gray-200');
		description.classList.add('text-gray-200');
		other.classList.remove('text-gray-500');
		other.classList.add('text-gray-200');

		cycleToImage(index);

		setTimeout(() => {
			title.classList.remove('text-gray-200');
			description.classList.remove('text-gray-200');
			other.classList.remove('text-gray-200');
			other.classList.add('text-gray-500');
		}, 150);
	}

	function cycleToImage(index: number) {
		const images = document.getElementsByClassName('image');
		[...images].forEach((image) => {
			// console.log(image.id, image);
			image?.classList.remove('z-10');
			image?.classList.add('z-0');
			image?.classList.remove('opacity-100');
			image?.classList.add('opacity-0');
		});

		const currentImage = document.getElementById(`image${index}`);
		// console.log('currentImage', currentImage);
		currentImage?.classList.remove('z-0');
		currentImage?.classList.add('z-10');
		currentImage?.classList.remove('opacity-0');
		currentImage?.classList.add('opacity-100');
	}

	onMount(() => {
		timer = setTimeout(cycleNext, interval);

		document.addEventListener('keydown', (e) => {
			if (e.key === 'ArrowRight') {
				cycleNext();
			} else if (e.key === 'ArrowLeft') {
				cyclePrevious();
			}
		});
	});

	const newsItems: NewsItem[] = [
		{
			uid: '_0',
			title: 'Catastrofaal snuifincident Stalingrad',
			description:
				'Morgen, bij de Toren van Pizza, heeft er een catastrofaal snuifincident plaatsgevonden. De oorzaak van dit ongeval is nog onbekend. We verwachten de uitslag spoedig, want Mortis zit in ons team. Er zijn 22 doden gevallen en 1 persoon kan niet meer snuiven. Verwacht wordt dat Trotski een handje heeft gehad in het incident.',
			date: '3 Januari 2021',
			location: 'Stalingrad',
			author: 'Nanniek van Mulligen',
			authorId: 'AFKK75DpaFfDpO2OPJ5MNz6pXkJ2',
			image: '/snuifincident.jpg'
		},
		{
			uid: '_1',
			title: 'Covalentie van barium flink gestegen',
			description:
				'Nieuw onderzoek toont aan dat de covalentie van barium recent is gestegen. Een internationaal onderzoek dat begin September is begonnen toont aan dat de covalentie van barium in 2020 is gestegen. De gevolgen van dit fenomeen zijn op dit moment nog onbekend. Wel wordt verwacht dat het snuifgevaar van bijvoorbeeld cocaïne in verband met de reinfactor en de lengte van de tijd drastisch is gedaald.',
			date: '29 December 2020',
			location: 'Polië-Nederland',
			author: 'Bogdan',
			authorId: 'AFKK75DpaFfDpO2OPJ5MNz6pXkJ2',
			image: '/barium.jpg'
		},
		{
			uid: '_2',
			title: "Professor G. Brock ontdekt medicijn tegen Jezusn't",
			description:
				"Professor Gnocchi Brock, zoon van prof. Knokker Brock, die werkt bij het KNIL (Koninklijk Nederlands Instituut Longboarden) en EGEL (het Engelse Giga-School Egel Laboratorium), heeft per 6 uur 's ochtends op 2 Januari 2021 een methode ontdekt waarmee een medicijn tegen Jezusn't gemaakt kan worden.",
			date: '2 Januari 2021',
			location: 'Polië-Nederland',
			author: 'Narnik met de Knik',
			authorId: 'AFKK75DpaFfDpO2OPJ5MNz6pXkJ2',
			image: '/medicijn.jpg'
		}
	];
</script>

<section
	class="slider flex justify-between rounded-lg 2xl:w-4/5 sm:w-10/12 my-12 shadow-lg bg-gray-200 overflow-hidden"
>
	<div class="flex w-full h-full">
		<div class="relative flex items-center w-2/3">
			<button
				class="absolute h-full text-gray-400 hover:bg-white/10 transition z-20"
				on:click={cyclePrevious}
			>
				<Fa icon={faAngleLeft} class="text-4xl mx-8" />
			</button>
			<!-- {#each [news[current].image] as src (current)} -->

			<a class="absolute w-full h-full overflow-hidden" href={`/nieuws/${newsItems[current].uid}`}>
				{#each newsItems as item, i}
					<img
						class={`image absolute aspect-video w-full h-full object-cover long-transition ${
							i == 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'
						} hover:scale-105`}
						src={item.image}
						id={`image${i}`}
						alt="Nieuwsfoto"
					/>
				{/each}
			</a>
			<!-- {/each} -->
			<button
				class="absolute right-0 h-full text-gray-400 hover:bg-white/10 transition z-20"
				on:click={cycleNext}
			>
				<Fa icon={faAngleRight} class="text-4xl mx-8" />
			</button>
		</div>
		<article class="flex flex-col p-4 w-1/3">
			<div class="flex gap-4 mb-2">
				<button
					class={`${
						current == 0 ? 'bg-gray-400/50' : 'bg-gray-300/50'
					} rounded-full h-2 w-12 transition`}
					on:click={() => cycleTo(0)}
				/>
				<button
					class={`${
						current == 1 ? 'bg-gray-400/50' : 'bg-gray-300/50'
					} rounded-full h-2 w-12 transition`}
					on:click={() => cycleTo(1)}
				/>
				<button
					class={`${
						current == 2 ? 'bg-gray-400/50' : 'bg-gray-300/50'
					} rounded-full h-2 w-12 transition`}
					on:click={() => cycleTo(2)}
				/>
			</div>
			<a href={`/nieuws/${newsItems[current].uid}`}
				><h2
					bind:this={title}
					class="text-4xl font-semibold mb-4 border-b border-gray-300 pb-3 transition"
				>
					{newsItems[current].title}
				</h2></a
			>
			<p class="transition text-lg" bind:this={description}>{newsItems[current].description}</p>
			<div class="flex flex-col mt-auto text-gray-500 transition" bind:this={other}>
				<p class="text-lg font-semibold">
					{newsItems[current].location} | {newsItems[current].date}
				</p>
				<a href={`/egelaars/${newsItems[current].authorId}`} class="text-lg hover:underline"
					>{newsItems[current].author}</a
				>
			</div>
		</article>
	</div>
</section>

<style lang="scss">
	.slider {
		height: 36rem;

		.long-transition {
			transition-property: color, background-color, border-color, text-decoration-color, fill,
				stroke, opacity, box-shadow, transform, filter, backdrop-filter;
			transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
			transition-duration: 500ms;
		}
	}
</style>
