<script lang="ts">
	import Fa from 'svelte-fa';
	import { faPlus, faCheck } from '@fortawesome/free-solid-svg-icons';
	import { browser } from '$app/environment';
	import { authStore, updateAuth } from '../../stores/auth';

	import getImgUrl from '../../scripts/cropImage';
	import { updatePfPic } from '../../database/users';

	let pfPicUrl: string;
	let pfPicErr: string;
	let pfPicInput: HTMLInputElement;

	async function changePfPic() {
		if (!browser) return;
		try {
			if (!$authStore.user) throw new Error('Je bent niet ingelogd');
			if (!pfPicUrl) throw new Error('Kies een nieuwe profielfoto');

			await updatePfPic($authStore.user.uid, pfPicUrl);

			await updateAuth($authStore.user);

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
</script>

{#if $authStore.user}
	<form on:submit|preventDefault={changePfPic} enctype="multipart/form-data">
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
{/if}
