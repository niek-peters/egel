<script lang="ts">
	import Fa from 'svelte-fa';
	import { faCheck, faXmark, faPaperPlane, faPerson } from '@fortawesome/free-solid-svg-icons';

	import { browser } from '$app/environment';
	import { authStore, updateAuth } from '../../../stores/auth';

	import { updateRealName } from '../../../database/users';

	let realNameErr: string;
	let realName: string;
	let realNameChanged: boolean = false;

	async function changeRealName() {
		if (!browser) return;
		try {
			if (!$authStore.user) throw new Error('Je bent niet ingelogd');
			if (!realName) throw new Error('Vul je echte naam in');

			updateRealName($authStore.user.uid, realName);

			updateAuth($authStore.user);

			// Reset all inputs and errors
			realName = realNameErr = '';

			realNameChanged = true;

			setTimeout(() => {
				realNameChanged = false;
			}, 2000);
		} catch (er) {
			if (er instanceof Error) {
				realNameChanged = false;
				realNameErr = er.message;

				console.error(realNameErr);

				setTimeout(() => {
					realNameErr = '';
				}, 2000);
			}
		}
	}
</script>

<form class="flex items-center justify-between gap-2" on:submit|preventDefault={changeRealName}>
	<label for="realName" class="flex w-8 justify-center"
		><Fa icon={faPerson} class="text-3xl" /></label
	>
	<div class="flex">
		<input
			id="realName"
			class="p-2 h-8 text-sm rounded-l-md my-2 outline-none border-transparent focus:border-gray-400 border-2 transition w-52"
			type="text"
			placeholder="Je echte naam"
			required
			bind:value={realName}
			minlength="3"
			maxlength="255"
		/>
		<button
			class={`${realNameErr ? 'bg-red-400 hover:bg-red-400' : ''} ${
				realNameChanged ? 'bg-green-400 hover:bg-green-400' : ''
			} flex items-center justify-center w-10 h-8 text-lg rounded-r-lg my-2 text-white bg-purple-400 hover:bg-purple-500 transition`}
			>{#if realNameErr}
				<p class="flex justify-center items-center">
					<Fa icon={faXmark} class="mr-2 text-lg" />
				</p>
			{:else if realNameChanged}
				<p class="flex justify-center items-center">
					<Fa icon={faCheck} class="mr-2 text-lg" />
				</p>
			{:else}
				<Fa icon={faPaperPlane} class="mr-2 text-lg" />
			{/if}</button
		>
	</div>
</form>
