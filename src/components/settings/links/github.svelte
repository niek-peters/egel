<script lang="ts">
	import Fa from 'svelte-fa';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
	import { faCheck, faXmark, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

	import { browser } from '$app/environment';
	import { authStore, updateAuth } from '../../../stores/auth';

	import { updateGithub } from '../../../database/users';

	let githubErr: string;
	let github: string;
	let githubChanged: boolean = false;

	async function changeGithub() {
		if (!browser) return;
		try {
			if (!$authStore.user) throw new Error('Je bent niet ingelogd');
			if (!github) throw new Error('Vul een YouTube url in');

			updateGithub($authStore.user.uid, github);

			updateAuth($authStore.user);

			// Reset all inputs and errors
			github = githubErr = '';

			githubChanged = true;

			setTimeout(() => {
				githubChanged = false;
			}, 2000);
		} catch (er) {
			if (er instanceof Error) {
				githubChanged = false;
				githubErr = er.message;

				console.error(githubErr);

				setTimeout(() => {
					githubErr = '';
				}, 2000);
			}
		}
	}
</script>

<form class="flex items-center justify-between" on:submit|preventDefault={changeGithub}>
	<label for="github"><Fa icon={faGithub} class="text-3xl text-gray-800 mr-2" /></label>
	<input
		id="github"
		class="p-2 h-8 text-sm rounded-l-md my-2 outline-none border-transparent focus:border-gray-400 border-2 transition w-52"
		type="url"
		placeholder="GitHub profiel url"
		required
		bind:value={github}
		minlength="3"
		maxlength="255"
	/>
	<button
		class={`${githubErr ? 'bg-red-400 hover:bg-red-400' : ''} ${
			githubChanged ? 'bg-green-400 hover:bg-green-400' : ''
		} flex items-center justify-center w-10 h-8 text-lg rounded-r-lg my-2 text-white bg-purple-400 hover:bg-purple-500 transition`}
		>{#if githubErr}
			<p class="flex justify-center items-center">
				<Fa icon={faXmark} class="mr-2 text-lg" />
			</p>
		{:else if githubChanged}
			<p class="flex justify-center items-center">
				<Fa icon={faCheck} class="mr-2 text-lg" />
			</p>
		{:else}
			<Fa icon={faPaperPlane} class="mr-2 text-lg" />
		{/if}</button
	>
</form>
