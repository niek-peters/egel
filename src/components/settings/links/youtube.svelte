<script lang="ts">
	import Fa from 'svelte-fa';
	import { faYoutube } from '@fortawesome/free-brands-svg-icons';
	import { faCheck, faXmark, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

	import { browser } from '$app/environment';
	import { authStore, updateAuth } from '../../../stores/auth';

	import { updateYoutube } from '../../../database/users';

	let youtubeErr: string;
	let youtube: string;
	let youtubeChanged: boolean = false;

	async function changeYoutube() {
		if (!browser) return;
		try {
			if (!$authStore.user) throw new Error('Je bent niet ingelogd');
			if (!youtube) throw new Error('Vul een YouTube url in');

			updateYoutube($authStore.user.uid, youtube);

			updateAuth($authStore.user);

			// Reset all inputs and errors
			youtube = youtubeErr = '';

			youtubeChanged = true;

			setTimeout(() => {
				youtubeChanged = false;
			}, 2000);
		} catch (er) {
			if (er instanceof Error) {
				youtubeChanged = false;
				youtubeErr = er.message;

				console.error(youtubeErr);

				setTimeout(() => {
					youtubeErr = '';
				}, 2000);
			}
		}
	}
</script>

<form class="flex items-center justify-between" on:submit|preventDefault={changeYoutube}>
	<label for="youtube"><Fa icon={faYoutube} class="text-3xl text-red-500 mr-2" /></label>
	<input
		id="youtube"
		class="p-2 h-8 text-sm rounded-l-md my-2 outline-none border-transparent focus:border-gray-400 border-2 transition w-52"
		type="url"
		placeholder="YouTube kanaal url"
		required
		bind:value={youtube}
		minlength="3"
		maxlength="255"
	/>
	<button
		class={`${youtubeErr ? 'bg-red-400 hover:bg-red-400' : ''} ${
			youtubeChanged ? 'bg-green-400 hover:bg-green-400' : ''
		} flex items-center justify-center w-10 h-8 text-lg rounded-r-lg my-2 text-white bg-purple-400 hover:bg-purple-500 transition`}
		>{#if youtubeErr}
			<p class="flex justify-center items-center">
				<Fa icon={faXmark} class="mr-2 text-lg" />
			</p>
		{:else if youtubeChanged}
			<p class="flex justify-center items-center">
				<Fa icon={faCheck} class="mr-2 text-lg" />
			</p>
		{:else}
			<Fa icon={faPaperPlane} class="mr-2 text-lg" />
		{/if}</button
	>
</form>
