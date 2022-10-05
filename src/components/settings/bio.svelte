<script lang="ts">
	import Fa from 'svelte-fa';
	import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

	import { browser } from '$app/environment';
	import { authStore, setAuth } from '../../stores/auth';

	import { updateBio } from '../../database/users';

	let bioErr: string;
	let bio: string;
	let bioChanged: boolean = false;

	async function changeUsername() {
		if (!browser) return;
		try {
			if (!$authStore.user) throw new Error('Je bent niet ingelogd');
			if (!bio) throw new Error('Vul een nieuwe gebruikersnaam in');

			updateBio($authStore.user.uid, bio);

			setAuth({
				user: $authStore.user,
				username: $authStore.username,
				pfPic: $authStore.pfPic,
				bio
			});

			// Reset all inputs and errors
			bio = bioErr = '';

			bioChanged = true;

			setTimeout(() => {
				bioChanged = false;
			}, 2000);
		} catch (er) {
			if (er instanceof Error) {
				bioChanged = false;
				bioErr = er.message;

				setTimeout(() => {
					bioErr = '';
				}, 2000);
			}
		}
	}
</script>

<form class="flex flex-col items-center" on:submit|preventDefault={changeUsername}>
	<h4 class="text-lg mb-2 font-semibold">Over mij:</h4>
	<textarea
		class="p-2 text-lg rounded-md m-2 outline-none border-transparent focus:border-gray-400 border-2 transition w-72"
		rows="1"
		type="text"
		placeholder="Vertel wat over jezelf"
		required
		bind:value={bio}
		minlength="3"
		maxlength="255"
	/>
	<button
		class={`${bioErr ? 'bg-red-400 hover:bg-red-400' : ''} ${
			bioChanged ? 'bg-green-400 hover:bg-green-400' : ''
		} p-2 text-lg rounded-md m-2 text-white bg-purple-400 hover:bg-purple-500 transition w-72`}
		>{#if bioErr}
			<p class="flex justify-center items-center">
				<Fa icon={faXmark} class="mr-2" />
				{bioErr}
			</p>
		{:else if bioChanged}
			<p class="flex justify-center items-center">
				<Fa icon={faCheck} class="mr-2" /> Over mij veranderd!
			</p>
		{:else}
			Bevestigen
		{/if}</button
	>
</form>
