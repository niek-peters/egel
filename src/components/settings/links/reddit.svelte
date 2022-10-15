<script lang="ts">
	import Fa from 'svelte-fa';
	import { faReddit } from '@fortawesome/free-brands-svg-icons';
	import { faCheck, faXmark, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

	import { browser } from '$app/environment';
	import { authStore, updateAuth } from '../../../stores/auth';

	import { updateReddit } from '../../../database/users';

	let redditErr: string;
	let reddit: string;
	let redditChanged: boolean = false;

	async function changeReddit() {
		if (!browser) return;
		try {
			if (!$authStore.user) throw new Error('Je bent niet ingelogd');
			if (!reddit) throw new Error('Vul een Reddit url in');

			updateReddit($authStore.user.uid, reddit);

			updateAuth($authStore.user);

			// Reset all inputs and errors
			reddit = redditErr = '';

			redditChanged = true;

			setTimeout(() => {
				redditChanged = false;
			}, 2000);
		} catch (er) {
			if (er instanceof Error) {
				redditChanged = false;
				redditErr = er.message;

				console.error(redditErr);

				setTimeout(() => {
					redditErr = '';
				}, 2000);
			}
		}
	}
</script>

<form class="flex items-center justify-between gap-2" on:submit|preventDefault={changeReddit}>
	<label for="reddit" class="flex w-8 justify-center"
		><Fa icon={faReddit} class="text-3xl text-orange-600 mr-2" /></label
	>
	<div class="flex">
		<input
			id="reddit"
			class="p-2 h-8 text-sm rounded-l-md my-2 outline-none border-transparent focus:border-gray-400 border-2 transition w-52"
			type="url"
			placeholder="Reddit profiel url"
			required
			bind:value={reddit}
			minlength="3"
			maxlength="255"
		/>
		<button
			class={`${redditErr ? 'bg-red-400 hover:bg-red-400' : ''} ${
				redditChanged ? 'bg-green-400 hover:bg-green-400' : ''
			} flex items-center justify-center w-10 h-8 text-lg rounded-r-lg my-2 text-white bg-purple-400 hover:bg-purple-500 transition`}
			>{#if redditErr}
				<p class="flex justify-center items-center">
					<Fa icon={faXmark} class="mr-2 text-lg" />
				</p>
			{:else if redditChanged}
				<p class="flex justify-center items-center">
					<Fa icon={faCheck} class="mr-2 text-lg" />
				</p>
			{:else}
				<Fa icon={faPaperPlane} class="mr-2 text-lg" />
			{/if}</button
		>
	</div>
</form>
