<script lang="ts">
	import { onMount } from 'svelte';

	import TimeLabel from './timeLabel.svelte';
	import Entry from './entry.svelte';

	import type { Event } from '../../models/event';
	import { formatDate } from '../../models/event';

	onMount(focusSlider);

	function focusSlider() {
		slider.focus({ preventScroll: true });
	}

	// Temporary events in memory
	// TODO: Replace with Firestore database read

	const events: Event[] = [
		{
			title: 'Bogdan wordt eindelijk 10',
			date: new Date().toISOString(),
			description: 'BLYATTTTTTTTTTTTTTTTTTT',
			img: '/egelleeft.png'
		},
		{
			title: 'Bogdan wordt eindelijk 11',
			date: new Date().toISOString(),
			description: 'BLYATTTTTTTTTTTTTTTTTTT 2',
			img: '/bogdan.jpg'
		},
		{
			title: 'Bogdan wordt eindelijk 12',
			date: new Date().toISOString(),
			description: 'BLYATTTTTTTTTTTTTTTTTTT 2',
			img: '/bogdan.jpg'
		},
		{
			title: 'Bogdan wordt eindelijk 13',
			date: new Date().toISOString(),
			description: 'BLYATTTTTTTTTTTTTTTTTTT 2',
			img: '/bogdan.jpg'
		},
		{
			title: 'Bogdan wordt eindelijk 14',
			date: new Date().toISOString(),
			description: 'BLYATTTTTTTTTTTTTTTTTTT 2',
			img: '/bogdan.jpg'
		},
		{
			title: 'Bogdan wordt eindelijk 15',
			date: new Date().toISOString(),
			description: 'BLYATTTTTTTTTTTTTTTTTTT 2',
			img: '/bogdan.jpg'
		},
		{
			title: 'Bogdan wordt eindelijk 16',
			date: new Date().toISOString(),
			description: 'BLYATTTTTTTTTTTTTTTTTTT 2',
			img: '/bogdan.jpg'
		}
	];

	let sliderPos = 0;
	let slider: HTMLInputElement;
</script>

<div class="2xl:w-3/5 sm:w-4/5 my-12" on:click={focusSlider}>
	<div class="w-full my-4">
		<ul class="flex justify-between my-2 text-lg font-semibold">
			<TimeLabel time="2017" />
			<TimeLabel time="2018" />
			<TimeLabel time="2019" />
			<TimeLabel time="2020" />
			<TimeLabel time="2021" />
			<TimeLabel time="2022" />
		</ul>
		<input
			type="range"
			min="0"
			max={events.length - 1}
			bind:value={sliderPos}
			bind:this={slider}
			class="slider w-full h-6 appearance-none outline-none opacity-80 rounded-lg overflow-hidden"
		/>
	</div>
	<div
		class="timeline overflow-y-auto flex flex-col justify-between w-full bg-gray-100 rounded-lg shadow-md"
	>
		<div class="inner">
			<Entry
				title={events[sliderPos].title}
				date={formatDate(events[sliderPos].date)}
				description={events[sliderPos].description}
				img={events[sliderPos].img}
			/>
		</div>
	</div>
</div>

<style lang="scss">
	.slider {
		background: linear-gradient(to left, magenta, rgb(65, 10, 154));

		&::-webkit-slider-thumb {
			appearance: none;
			width: 0.5rem;
			height: 1.5rem;
			background: rgb(20, 20, 20);
			cursor: pointer;
		}
	}
</style>
