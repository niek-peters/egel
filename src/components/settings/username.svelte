<script lang="ts">
	import Fa from 'svelte-fa';
	import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

	import { browser } from '$app/environment';
	import { authStore, updateAuth } from '../../stores/auth';

	import { updateUsername } from '../../database/users';

	let usernameErr: string;
	let newUsername: string;
	let usernameChanged: boolean = false;

	async function changeUsername() {
		if (!browser) return;
		try {
			if (!$authStore.user) throw new Error('Je bent niet ingelogd');
			if (!newUsername) throw new Error('Vul een nieuwe gebruikersnaam in');

			await updateUsername($authStore.user.uid, newUsername);

			updateAuth($authStore.user);

			// Reset all inputs and errors
			newUsername = usernameErr = '';

			usernameChanged = true;

			setTimeout(() => {
				usernameChanged = false;
			}, 2000);
		} catch (er) {
			if (er instanceof Error) {
				usernameChanged = false;
				usernameErr = er.message;

				setTimeout(() => {
					usernameErr = '';
				}, 2000);
			}
		}
	}
</script>

<form class="flex flex-col items-center" on:submit|preventDefault={changeUsername}>
	<h4 class="text-lg mb-2 font-semibold">Gebruikersnaam:</h4>
	<input
		class="p-2 text-lg rounded-md m-2 outline-none border-transparent focus:border-gray-400 border-2 transition w-72"
		type="text"
		placeholder="Nieuwe gebruikersnaam"
		required
		bind:value={newUsername}
		minlength="3"
		maxlength="24"
	/>
	<button
		class={`${usernameErr ? 'bg-red-400 hover:bg-red-400' : ''} ${
			usernameChanged ? 'bg-green-400 hover:bg-green-400' : ''
		} p-2 text-lg rounded-md m-2 text-white bg-purple-400 hover:bg-purple-500 transition w-72`}
		>{#if usernameErr}
			<p class="flex justify-center items-center">
				<Fa icon={faXmark} class="mr-2" />
				{usernameErr}
			</p>
		{:else if usernameChanged}
			<p class="flex justify-center items-center">
				<Fa icon={faCheck} class="mr-2" /> Gebruikersnaam veranderd!
			</p>
		{:else}
			Bevestigen
		{/if}</button
	>
</form>
