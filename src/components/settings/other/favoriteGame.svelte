<script lang="ts">
	import Fa from 'svelte-fa';
	import { faCheck, faXmark, faPaperPlane, faGamepad } from '@fortawesome/free-solid-svg-icons';

	import { browser } from '$app/environment';
	import { authStore, updateAuth } from '../../../stores/auth';

	import { updateFavoriteGame } from '../../../database/users';

	let favoriteGameErr: string;
	let favoriteGame: string;
	let favoriteGameChanged: boolean = false;

	async function changeFavoriteGame() {
		if (!browser) return;
		try {
			if (!$authStore.user) throw new Error('Je bent niet ingelogd');
			if (!favoriteGame) throw new Error('Vul je favoriete game in');

			updateFavoriteGame($authStore.user.uid, favoriteGame);

			updateAuth($authStore.user);

			// Reset all inputs and errors
			favoriteGame = favoriteGameErr = '';

			favoriteGameChanged = true;

			setTimeout(() => {
				favoriteGameChanged = false;
			}, 2000);
		} catch (er) {
			if (er instanceof Error) {
				favoriteGameChanged = false;
				favoriteGameErr = er.message;

				console.error(favoriteGameErr);

				setTimeout(() => {
					favoriteGameErr = '';
				}, 2000);
			}
		}
	}
</script>

<form class="flex items-center justify-between gap-2" on:submit|preventDefault={changeFavoriteGame}>
	<label for="favoriteGame" class="flex w-8 justify-center"
		><Fa icon={faGamepad} class="text-3xl" /></label
	>
	<div class="flex">
		<input
			id="favoriteGame"
			class="p-2 h-8 text-sm rounded-l-md my-2 outline-none border-transparent focus:border-gray-400 border-2 transition w-52"
			type="text"
			placeholder="Je favoriete game"
			required
			bind:value={favoriteGame}
			minlength="3"
			maxlength="255"
		/>
		<button
			class={`${favoriteGameErr ? 'bg-red-400 hover:bg-red-400' : ''} ${
				favoriteGameChanged ? 'bg-green-400 hover:bg-green-400' : ''
			} flex items-center justify-center w-10 h-8 text-lg rounded-r-lg my-2 text-white bg-purple-400 hover:bg-purple-500 transition`}
			>{#if favoriteGameErr}
				<p class="flex justify-center items-center">
					<Fa icon={faXmark} class="mr-2 text-lg" />
				</p>
			{:else if favoriteGameChanged}
				<p class="flex justify-center items-center">
					<Fa icon={faCheck} class="mr-2 text-lg" />
				</p>
			{:else}
				<Fa icon={faPaperPlane} class="mr-2 text-lg" />
			{/if}</button
		>
	</div>
</form>
