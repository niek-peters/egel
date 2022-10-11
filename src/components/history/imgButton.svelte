<script lang="ts">
	import Fa from 'svelte-fa';
	import { faPlus } from '@fortawesome/free-solid-svg-icons';

	import { setImg, imgStore } from '../../stores/imgStore';

	import getImgUrl from '../../scripts/cropImage';

	async function updateImgPreview() {
		if (!imgInput.files || !imgInput.files[0]) return;

		try {
			setImg(await getImgUrl(imgInput.files[0], 360, 360));
		} catch (er) {
			console.error(er);
		}
	}

	let imgInput: HTMLInputElement;
</script>

<div class="h-full">
	<label for="image" class="block text-lg font-semibold mb-2">Afbeelding</label>
	<button
		id="image"
		type="button"
		class={`img-button flex outline-none items-center justify-center relative rounded-lg bg-purple-400 ${
			$imgStore ? '' : 'hover:bg-purple-500'
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
			<img
				src={$imgStore}
				alt="Event representation"
				class="rounded-lg overflow-hidden object-cover"
			/>
		{:else}
			<Fa icon={faPlus} class="text-7xl" />
		{/if}
	</button>
</div>

<style lang="scss">
	button {
		width: 42.67rem;
		height: 24rem;

		img {
			width: inherit;
			height: inherit;
		}
	}
</style>
