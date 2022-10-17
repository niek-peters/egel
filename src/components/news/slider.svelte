<script lang="ts">
	import Fa from 'svelte-fa';
	import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

	import { onMount } from 'svelte';

	let current = 0;

	let cycleBtn0: HTMLButtonElement;
	let cycleBtn1: HTMLButtonElement;
	let cycleBtn2: HTMLButtonElement;

	function cycleTo(index: number) {
		current = index;
	}

	function cycleNext() {
		current = (current + 1) % news.length;
	}

	function cyclePrevious() {
		current = (current - 1 + news.length) % news.length;
	}

	onMount(() => {
		document.addEventListener('keydown', (e) => {
			if (e.key === 'ArrowRight') {
				cycleNext();
			} else if (e.key === 'ArrowLeft') {
				cyclePrevious();
			}
		});
	});

	const news = [
		{
			title: 'Catastrofaal snuifincident Stalingrad',
			description:
				'Morgen, bij de Toren van Pizza, heeft er een catastrofaal snuifincident plaatsgevonden. De oorzaak van dit ongeval is nog onbekend. We verwachten de uitslag spoedig, want Mortis zit in ons team. Er zijn 22 doden gevallen en 1 persoon kan niet meer snuiven. Verwacht wordt dat Trotski een handje heeft gehad in het incident.',
			date: '2021-05-01',
			location: 'Stalingrad',
			author: 'Nanniek van Mulligen',
			authorId: 'AFKK75DpaFfDpO2OPJ5MNz6pXkJ2',
			image: '/egelleeft.png'
		},
		{
			title: 'Covalentie van barium flink gestegen',
			description:
				'Morgen, bij de Toren van Pizza, heeft er een catastrofaal snuifincident plaatsgevonden. De oorzaak van dit ongeval is nog onbekend. We verwachten de uitslag spoedig, want Mortis zit in ons team. Er zijn 22 doden gevallen en 1 persoon kan niet meer snuiven. Verwacht wordt dat Trotski een handje heeft gehad in het incident.',
			date: '2021-05-01',
			location: 'Stalingrad',
			author: 'Nanniek van Mulligen',
			authorId: 'AFKK75DpaFfDpO2OPJ5MNz6pXkJ2',
			image: '/egelleeft.png'
		},
		{
			title: "Professor G. Brock ontdekt medicijn tegen Jezusn't",
			description:
				'Morgen, bij de Toren van Pizza, heeft er een catastrofaal snuifincident plaatsgevonden. De oorzaak van dit ongeval is nog onbekend. We verwachten de uitslag spoedig, want Mortis zit in ons team. Er zijn 22 doden gevallen en 1 persoon kan niet meer snuiven. Verwacht wordt dat Trotski een handje heeft gehad in het incident.',
			date: '2021-05-01',
			location: 'Stalingrad',
			author: 'Nanniek van Mulligen',
			authorId: 'AFKK75DpaFfDpO2OPJ5MNz6pXkJ2',
			image: '/egelleeft.png'
		}
	];
</script>

<section
	class="slider flex justify-between rounded-lg 2xl:w-3/5 sm:w-4/5 my-12 bg-gray-200 overflow-hidden"
>
	<div class="relative flex items-center w-2/3">
		<button
			class="absolute h-full text-gray-400 hover:bg-white/10 transition"
			on:click={cyclePrevious}
		>
			<Fa icon={faAngleLeft} class="text-4xl mx-8" />
		</button>
		<img
			class="aspect-video w-full h-full object-cover"
			src={news[current].image}
			alt="Nieuwsfoto"
		/>
		<button
			class="absolute right-0 h-full text-gray-400 hover:bg-white/10 transition"
			on:click={cyclePrevious}
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
				bind:this={cycleBtn0}
			/>
			<button
				class={`${
					current == 1 ? 'bg-gray-400/50' : 'bg-gray-300/50'
				} rounded-full h-2 w-12 transition`}
				on:click={() => cycleTo(1)}
				bind:this={cycleBtn1}
			/>
			<button
				class={`${
					current == 2 ? 'bg-gray-400/50' : 'bg-gray-300/50'
				} rounded-full h-2 w-12 transition`}
				on:click={() => cycleTo(2)}
				bind:this={cycleBtn2}
			/>
		</div>
		<h2 class="text-3xl font-semibold mb-4 border-b border-gray-300 pb-3">{news[current].title}</h2>
		<p>{news[0].description}</p>
		<div class="flex flex-col mt-auto">
			<p class="text-sm text-gray-500 font-semibold">
				{news[current].location} | {news[current].date}
			</p>
			<a
				href={`/egelaars/${news[current].authorId}`}
				class="text-sm text-gray-500 hover:text-gray-600 hover:underline transition"
				>{news[current].author}</a
			>
		</div>
	</article>
</section>

<style>
	.slider {
		height: 30rem;
	}
</style>
