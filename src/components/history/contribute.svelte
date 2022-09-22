<script lang="ts">
	import { getStorage, ref, uploadString, getDownloadURL } from 'firebase/storage';
	import { ulid } from 'ulid';
	import { db } from '../../scripts/firebaseInit';
	import { doc, setDoc, getFirestore, Timestamp } from 'firebase/firestore';
	import { authStore } from '../../stores/auth';

	import ImgButton from './imgButton.svelte';
	import { imgStore } from '../../stores/imgStore';

	async function submitHistory() {
		const user = $authStore.user;
		if (!$imgStore || !user || !user.uid) return;

		const storage = getStorage();
		const storageRef = ref(storage, `history/${ulid()}`);

		const firestore = getFirestore();
		const firestoreRef = doc(firestore, 'History', ulid());

		await uploadString(storageRef, $imgStore, 'data_url');

		const url = await getDownloadURL(storageRef);

		await setDoc(firestoreRef, {
			title: title,
			description: description,
			date: Timestamp.fromDate(date),
			img: url
		});
	}

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
			Stuur hier dan de informatie over de gebeurtenis en potentieel een afbeelding op naar de Egel
			Historians! Alle inzendingen worden eerst gecontroleerd voordat ze toegevoegd worden aan de
			tijdbalk.
			<br />
			Voor vragen over de richtlijnen om te volgen bij je inzending, kun je terecht in de Discord server.
		</p>
	</article>
	<form class="flex justify-between" on:submit|preventDefault={submitHistory}>
		<div class="w-1/3 mr-8">
			<label for="title" class="block text-lg font-semibold mb-2">Titel</label>
			<input
				type="text"
				name="title"
				id="title"
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
				bind:value={description}
				class="w-full  rounded-lg border outline-none border-gray-300 p-2 mb-4 focus:border-purple-500 transition"
			/>
			<button
				type="submit"
				class="w-full rounded-lg border outline-none border-gray-300 p-2 mb-2 text-white bg-purple-400 hover:bg-purple-500 transition"
			>
				Verstuur
			</button>
		</div>

		<ImgButton />
	</form>
</div>
