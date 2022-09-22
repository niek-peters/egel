<script lang="ts">
	import { addHistory } from '../../database/history';

	import ImgButton from './imgButton.svelte';
	import { imgStore, setImg } from '../../stores/imgStore';

	async function submitHistory() {
		// If we are missing data, don't submit it
		if (!title || !description || !date || !$imgStore) {
			success = '';
			error = 'Vul alle velden in!';
			setTimeout(() => (error = ''), 2000);
			return;
		}

		addHistory(title, description, date, $imgStore);
		error = '';
		success = 'Bijdrage ingediend!';
		setTimeout(() => {
			success = title = description = '';
			date = new Date();
			setImg('');
		}, 1000);
	}

	let error: string = '';
	let success: string = '';

	let title: string = '';
	let description: string = '';
	let dateInput: HTMLInputElement;
	let date: Date = new Date();
</script>

<div class="2xl:w-3/5 sm:w-4/5">
	<article class="w-full mb-12">
		<h1 class="text-4xl font-semibold mb-4 border-b border-gray-300 pb-3">
			Bijdragen aan de tijdlijn
		</h1>
		<p class="text-lg">
			Heb je interesse in het helpen bij het opschrijven van belangrijke gebeurtenissen binnen Egel?
			Stuur hier dan de informatie over de gebeurtenis en potentieel een afbeelding op! Alle
			inzendingen worden eerst gecontroleerd voordat ze toegevoegd worden aan de tijdbalk.
			<br />
			Voor vragen over de richtlijnen om te volgen bij je inzending, kun je terecht in de Discord server.
		</p>
	</article>
	<form class="flex justify-between" on:submit|preventDefault={submitHistory}>
		<div class="relative w-1/3 mr-8">
			<label for="title" class="block text-lg font-semibold mb-2">Titel</label>
			<input
				type="text"
				name="title"
				id="title"
				minlength="3"
				maxlength="50"
				bind:value={title}
				class="w-full rounded-lg border outline-none border-gray-300 p-2 mb-4 focus:border-purple-500 transition"
			/>
			<label for="title" class="block text-lg font-semibold mb-2">Datum</label>
			<input
				type="date"
				name="title"
				id="title"
				bind:this={dateInput}
				on:change={() => (date = new Date(dateInput.value))}
				class="w-full rounded-lg border outline-none border-gray-300 p-2 mb-4 focus:border-purple-500 transition"
			/>
			<label for="description" class="block text-lg font-semibold mb-2">Beschrijving</label>
			<textarea
				name="description"
				id="description"
				minlength="3"
				maxlength="1023"
				bind:value={description}
				class="w-full  rounded-lg border outline-none border-gray-300 p-2 mb-4 focus:border-purple-500 transition"
			/>
			<button
				type="submit"
				class="w-full rounded-lg border outline-none border-gray-300 p-2 mb-2 text-white bg-purple-400 hover:bg-purple-500 transition"
			>
				Verstuur
			</button>

			<div
				class={`absolute w-full font-lg bg-red-400 border-2 border-red-500 text-white mt-4 rounded-lg p-2 ${
					error ? '' : 'opacity-0'
				} transition`}
			>
				{error}
			</div>

			<div
				class={`absolute w-full font-lg bg-green-400 border-2 border-green-500 text-white mt-4 rounded-lg p-2 ${
					success ? '' : 'opacity-0'
				} transition`}
			>
				{success}
			</div>
		</div>

		<ImgButton />
	</form>
</div>

<style lang="scss">
	.popup {
		height: inherit;
	}
</style>
