<script lang="ts">
	import ImgButton from '../history/imgButton.svelte';

	let title: string;
	let description: string;

	let error: string;
	let success: boolean;

	function submitPost() {}
</script>

<div class="flex flex-col items-center">
	<h2 class="text-2xl font-semibold my-4">Nieuwe post toevoegen</h2>
	<form class="flex flex-col items-center gap-4" on:submit|preventDefault={submitPost}>
		<ImgButton />
		<div class="w-full">
			<label for="title" class="block text-lg font-semibold mb-2">Titel</label>
			<input
				type="text"
				name="title"
				id="title"
				placeholder="Titel van je post"
				minlength="3"
				maxlength="50"
				bind:value={title}
				class="w-full rounded-lg border outline-none border-gray-300 p-2 focus:border-purple-500 transition"
			/>
		</div>
		<div class="w-full">
			<label for="description" class="block text-lg font-semibold mb-2">Beschrijving</label>
			<textarea
				name="description"
				id="description"
				placeholder="Beschrijf wat je post inhoudt"
				minlength="3"
				maxlength="1023"
				bind:value={description}
				class="w-full  rounded-lg border outline-none border-gray-300 p-2 focus:border-purple-500 transition"
			/>
		</div>
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
	</form>
</div>
