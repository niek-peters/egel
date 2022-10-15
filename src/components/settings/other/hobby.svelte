<script lang="ts">
	import Fa from 'svelte-fa';
	import { faCheck, faXmark, faPaperPlane, faPaintBrush } from '@fortawesome/free-solid-svg-icons';

	import { browser } from '$app/environment';
	import { authStore, updateAuth } from '../../../stores/auth';

	import { updateHobby } from '../../../database/users';

	let hobbyErr: string;
	let hobby: string;
	let hobbyChanged: boolean = false;

	async function changeHobby() {
		if (!browser) return;
		try {
			if (!$authStore.user) throw new Error('Je bent niet ingelogd');
			if (!hobby) throw new Error('Vul je hobby in');

			updateHobby($authStore.user.uid, hobby);

			updateAuth($authStore.user);

			// Reset all inputs and errors
			hobby = hobbyErr = '';

			hobbyChanged = true;

			setTimeout(() => {
				hobbyChanged = false;
			}, 2000);
		} catch (er) {
			if (er instanceof Error) {
				hobbyChanged = false;
				hobbyErr = er.message;

				console.error(hobbyErr);

				setTimeout(() => {
					hobbyErr = '';
				}, 2000);
			}
		}
	}
</script>

<form class="flex items-center justify-between gap-2" on:submit|preventDefault={changeHobby}>
	<label for="hobby" class="flex w-8 justify-center"
		><Fa icon={faPaintBrush} class="text-3xl" /></label
	>
	<div class="flex">
		<input
			id="hobby"
			class="p-2 h-8 text-sm rounded-l-md my-2 outline-none border-transparent focus:border-gray-400 border-2 transition w-52"
			type="text"
			placeholder="Je hobby"
			required
			bind:value={hobby}
			minlength="3"
			maxlength="255"
		/>
		<button
			class={`${hobbyErr ? 'bg-red-400 hover:bg-red-400' : ''} ${
				hobbyChanged ? 'bg-green-400 hover:bg-green-400' : ''
			} flex items-center justify-center w-10 h-8 text-lg rounded-r-lg my-2 text-white bg-purple-400 hover:bg-purple-500 transition`}
			>{#if hobbyErr}
				<p class="flex justify-center items-center">
					<Fa icon={faXmark} class="mr-2 text-lg" />
				</p>
			{:else if hobbyChanged}
				<p class="flex justify-center items-center">
					<Fa icon={faCheck} class="mr-2 text-lg" />
				</p>
			{:else}
				<Fa icon={faPaperPlane} class="mr-2 text-lg" />
			{/if}</button
		>
	</div>
</form>
