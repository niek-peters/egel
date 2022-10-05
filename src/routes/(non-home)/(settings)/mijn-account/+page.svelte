<script lang="ts">
	import Fa from 'svelte-fa';
	import { faPlus, faCheck } from '@fortawesome/free-solid-svg-icons';
	import { browser } from '$app/environment';
	import { authStore, setAuth } from '../../../../stores/auth';

	import getImgUrl from '../../../../scripts/cropImage';
	import { updatePfPic, updateUsername } from '../../../../database/users';

	let usernameErr: string;
	let pfPicErr: string;

	let newUsername: string;
	let pfPicUrl: string;

	let usernameChanged: boolean = false;

	async function changeUsername() {
		if (!browser) return;
		try {
			if (!$authStore.user) throw new Error('Je bent niet ingelogd');
			if (!newUsername) throw new Error('Vul een nieuwe gebruikersnaam in');

			updateUsername($authStore.user.uid, newUsername);

			setAuth({ user: $authStore.user, displayName: newUsername, pfPic: $authStore.pfPic });

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

	async function changePfPic() {
		if (!browser) return;
		try {
			if (!$authStore.user) throw new Error('Je bent niet ingelogd');
			if (!pfPicUrl) throw new Error('Kies een nieuwe profielfoto');

			const url = await updatePfPic($authStore.user.uid, pfPicUrl);

			setAuth({
				user: $authStore.user,
				displayName: $authStore.displayName,
				pfPic: url
			});

			// Reset all inputs and errors
			pfPicUrl = pfPicErr = '';
		} catch (er) {
			if (er instanceof Error) {
				if (er instanceof Error) {
					pfPicErr = er.message;

					setTimeout(() => {
						pfPicErr = '';
					}, 2000);
				}
			}
		}
	}

	async function updateImgPreview() {
		if (!pfPicInput.files || !pfPicInput.files[0]) return;

		try {
			pfPicUrl = await getImgUrl(pfPicInput.files[0], 128, 128);
		} catch (er) {
			console.error(er);
		}
	}

	let pfPicInput: HTMLInputElement;
</script>

{#if $authStore.user}
	<form
		class="flex p-8 items-center justify-center bg-gray-200/50 rounded-md"
		on:submit|preventDefault={changePfPic}
		enctype="multipart/form-data"
	>
		<div class="flex flex-col items-center">
			<h2 class="text-4xl mr-8 mb-2">
				<b>{$authStore.displayName || $authStore.user.displayName}</b>
			</h2>
			<h4 class="text-lg mr-8">Google username: {$authStore.user.displayName}</h4>
		</div>
		<button
			type="button"
			class={`flex outline-none items-center justify-center relative rounded-full bg-purple-300 ${
				pfPicUrl ? '' : 'hover:bg-purple-400'
			} mx-4 w-36 h-36 transition`}
			on:click={() => pfPicInput.click()}
		>
			<input
				class="hidden"
				type="file"
				accept=".jpg, .jpeg, .png"
				bind:this={pfPicInput}
				on:change={updateImgPreview}
			/>
			{#if pfPicErr}
				<p
					class="flex items-center justify-center p-4 rounded-full overflow-hidden w-36 h-36 bg-red-400 border-red-500 border-2 text-lg"
				>
					{pfPicErr}
				</p>
			{:else if pfPicUrl}
				<img
					src={pfPicUrl}
					alt="pf pic"
					class="rounded-full overflow-hidden w-36 h-36 object-cover"
				/>
			{:else if $authStore.pfPic || $authStore.user.photoURL}
				<img
					src={$authStore.pfPic || $authStore.user.photoURL}
					alt="pf pic"
					class="rounded-full overflow-hidden w-36 h-36 object-cover"
				/>
			{:else}
				<Fa icon={faPlus} class="text-7xl" />
			{/if}

			<button
				class={`flex outline-none items-center justify-center absolute top-24 left-24 p-2 text-md rounded-full m-2 text-white bg-green-400 hover:bg-green-500 w-12 h-12 transition ${
					pfPicUrl ? 'opacity-100' : 'opacity-0'
				}`}
				on:click|stopPropagation><Fa icon={faCheck} class="text-3xl" /></button
			>
		</button>
	</form>
	<div class="mt-6">
		<form class="flex flex-col items-center" on:submit|preventDefault={changeUsername}>
			<h4 class="text-lg mb-4 font-semibold">Gebruikersnaam veranderen:</h4>
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
				class="p-2 text-lg rounded-md m-2 text-white bg-purple-400 hover:bg-purple-500 transition w-72"
				>Bevestigen</button
			>
			{#if usernameErr}
				<p
					class="flex justify-center p-2 text-lg rounded-md m-2 bg-red-400 border-red-500 border-2 w-72"
				>
					{usernameErr}
				</p>
			{:else if usernameChanged}
				<p
					class="flex justify-center p-2 text-lg rounded-md m-2 bg-green-400 border-green-500 border-2 w-72"
				>
					Gebruikersnaam veranderd!
				</p>
			{/if}
		</form>
	</div>
{/if}
