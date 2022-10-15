<script lang="ts">
	import Fa from 'svelte-fa';
	import { faPlus } from '@fortawesome/free-solid-svg-icons';

	import { setImg, imgStore } from '../../stores/imgStore';

	import { getImageUrlNoCrop } from '../../scripts/cropImage';

	async function updateImgPreview() {
		if (!imgInput.files || !imgInput.files[0]) return;

		try {
			setImg(await getImageUrlNoCrop(imgInput.files[0], 480));
		} catch (er) {
			console.error(er);
		}
	}

	let imgInput: HTMLInputElement;
</script>

<div class="w-full h-full">
	<label for="image" class="block text-lg font-semibold mb-2">Afbeelding</label>
	<button
		id="image"
		type="button"
		class={`w-full h-full flex outline-none items-center justify-center relative rounded-lg  ${
			$imgStore ? '' : 'bg-purple-400 hover:bg-purple-500'
		} transition mb-2`}
		on:click={() => imgInput.click()}
	>
		<input
			class="hidden"
			type="file"
			accept=".jpg, .jpeg, .png"
			bind:this={imgInput}
			on:change={updateImgPreview}
		/>
		{#if $imgStore}
			<img src={$imgStore} alt="Event representation" class="rounded-lg w-full h-auto" />
		{:else}
			<div class="flex items-center justify-center w-full h-48">
				<Fa icon={faPlus} class="text-7xl" />
			</div>
		{/if}
	</button>
</div>
