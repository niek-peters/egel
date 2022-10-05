<script lang="ts">
	import Fa from 'svelte-fa';
	import { faTwitter } from '@fortawesome/free-brands-svg-icons';
	import { faCheck, faXmark, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

	import { browser } from '$app/environment';
	import { authStore, updateAuth } from '../../../stores/auth';

	import { updateTwitter } from '../../../database/users';

	let twitterErr: string;
	let twitter: string;
	let twitterChanged: boolean = false;

	async function changeTwitter() {
		if (!browser) return;
		try {
			if (!$authStore.user) throw new Error('Je bent niet ingelogd');
			if (!twitter) throw new Error('Vul een YouTube url in');

			updateTwitter($authStore.user.uid, twitter);

			updateAuth($authStore.user);

			// Reset all inputs and errors
			twitter = twitterErr = '';

			twitterChanged = true;

			setTimeout(() => {
				twitterChanged = false;
			}, 2000);
		} catch (er) {
			if (er instanceof Error) {
				twitterChanged = false;
				twitterErr = er.message;

				console.error(twitterErr);

				setTimeout(() => {
					twitterErr = '';
				}, 2000);
			}
		}
	}
</script>

<form class="flex items-center justify-between" on:submit|preventDefault={changeTwitter}>
	<label for="twitter"><Fa icon={faTwitter} class="text-3xl text-blue-400 mr-2" /></label>
	<input
		id="twitter"
		class="p-2 h-8 text-sm rounded-l-md my-2 outline-none border-transparent focus:border-gray-400 border-2 transition w-52"
		type="url"
		placeholder="Twitter profiel url"
		required
		bind:value={twitter}
		minlength="3"
		maxlength="255"
	/>
	<button
		class={`${twitterErr ? 'bg-red-400 hover:bg-red-400' : ''} ${
			twitterChanged ? 'bg-green-400 hover:bg-green-400' : ''
		} flex items-center justify-center w-10 h-8 text-lg rounded-r-lg my-2 text-white bg-purple-400 hover:bg-purple-500 transition`}
		>{#if twitterErr}
			<p class="flex justify-center items-center">
				<Fa icon={faXmark} class="mr-2 text-lg" />
			</p>
		{:else if twitterChanged}
			<p class="flex justify-center items-center">
				<Fa icon={faCheck} class="mr-2 text-lg" />
			</p>
		{:else}
			<Fa icon={faPaperPlane} class="mr-2 text-lg" />
		{/if}</button
	>
</form>
