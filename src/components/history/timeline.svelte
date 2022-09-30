<script lang="ts">
	import { onMount } from 'svelte';
	import { getHistory } from '../../database/history';

	import TimeLabel from './timeLabel.svelte';
	import Entry from './entry.svelte';

	import type { Event } from '../../models/event';
	import { formatDate } from '../../models/event';
	import { Timestamp } from 'firebase/firestore';

	onMount(() => {
		focusSlider();
	});

	function focusSlider() {
		slider.focus({ preventScroll: true });
	}

	let events: Event[] = [];

	async function displayHistory() {
		events = (await getHistory()) as Event[];
	}
	displayHistory();

	let sliderPos = 0;
	let slider: HTMLInputElement;
</script>

<div class="2xl:w-3/5 sm:w-4/5 my-12" on:click={focusSlider}>
	<div class="w-full my-4">
		<ul class="flex justify-between my-2 text-lg font-semibold">
			<TimeLabel time="2017" />
			<TimeLabel time="Heden" />
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
		{#if events[0] && events[0].title}
			<Entry
				title={events[sliderPos].title}
				date={formatDate(events[sliderPos].date)}
				description={events[sliderPos].description}
				img={events[sliderPos].img}
			/>
		{:else}
			<Entry
				title="Er zijn nog geen evenementen toegevoegd!"
				date={formatDate(Timestamp.now())}
				description="Verstuur een evenement met het formulier hieronder. We zullen het zo snel mogelijk controleren en toevoegen."
				img="/egelleeft.png"
			/>
		{/if}
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
