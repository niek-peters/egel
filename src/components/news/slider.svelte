<script lang="ts">
	import Fa from 'svelte-fa';
	import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
	// import { fade } from 'svelte/transition';

	import { onMount } from 'svelte';

	let current = 0;
	let timer: NodeJS.Timer;
	let interval = 8000;

	let title: HTMLHeadingElement;
	let description: HTMLParagraphElement;
	let other: HTMLDivElement;

	function cycleTo(index: number) {
		clearTimeout(timer);
		timer = setTimeout(cycleNext, interval);

		animateCycle();

		setTimeout(() => {
			current = index;
		}, 150);
	}

	function cycleNext() {
		cycleTo((current + 1) % news.length);
	}

	function cyclePrevious() {
		cycleTo((current - 1 + news.length) % news.length);
	}

	function animateCycle() {
		title.classList.add('text-gray-200');
		description.classList.add('text-gray-200');
		other.classList.remove('text-gray-500');
		other.classList.add('text-gray-200');

		setTimeout(() => {
			title.classList.remove('text-gray-200');
			description.classList.remove('text-gray-200');
			other.classList.remove('text-gray-200');
			other.classList.add('text-gray-500');
		}, 150);
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

	type newsItem = {
		title: string;
		description: string;
		date: string;
		location: string;
		author: string;
		authorId: string;
		image: string;
	};

	const news: newsItem[] = [
		{
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
	class="slider flex justify-between rounded-lg 2xl:w-3/5 sm:w-4/5 my-12 bg-gray-200 overflow-hidden"
>
	<div class="flex w-full h-full">
		<div class="relative flex items-center w-2/3">
			<button
				class="absolute h-full text-gray-400 hover:bg-white/10 transition z-10"
				on:click={cyclePrevious}
			>
				<Fa icon={faAngleLeft} class="text-4xl mx-8" />
			</button>
			<!-- {#each [news[current].image] as src (current)} -->
			<img
				class="absolute aspect-video w-full h-full object-cover"
				src={news[current].image}
				alt="Nieuwsfoto"
			/>
			<!-- {/each} -->
			<button
				class="absolute right-0 h-full text-gray-400 hover:bg-white/10 transition z-10"
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
			<h2
				bind:this={title}
				class="text-3xl font-semibold mb-4 border-b border-gray-300 pb-3 transition"
			>
				{news[current].title}
			</h2>
			<p class="transition" bind:this={description}>{news[current].description}</p>
			<div class="flex flex-col mt-auto text-gray-500 transition" bind:this={other}>
				<p class="text-sm font-semibold">
					{news[current].location} | {news[current].date}
				</p>
				<a href={`/egelaars/${news[current].authorId}`} class="text-sm hover:underline"
					>{news[current].author}</a
				>
			</div>
		</article>
	</div>
</section>

<style>
	.slider {
		height: 30rem;
	}
</style>
