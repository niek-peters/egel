<script lang="ts">
	import { browser } from '$app/environment';
	import Fa from 'svelte-fa';
	import { faPlus } from '@fortawesome/free-solid-svg-icons';

	import { setImg } from '../../stores/imgStore';

	// @ts-ignore
	import cropImage from '../../scripts/cropImage';

	async function updateImgPreview() {
		if (!browser) return;
		if (!imgInput.files || !imgInput.files[0]) return;

		const reader = new FileReader();

		reader.readAsDataURL(imgInput.files[0]);

		reader.onload = function (event) {
			const imgElement = document.createElement('img');
			if (!imgElement || !event.target || !event.target.result) return;

			imgElement.src = event.target.result as string;

			imgElement.onload = function (e) {
				const img = e.target as CanvasImageSource;
				if (
					!e.target ||
					!img.width ||
					!img.height ||
					typeof img.width !== 'number' ||
					typeof img.height !== 'number'
				)
					return;

				const canvas = document.createElement('canvas');
				canvas.width = 384;
				canvas.height = 216;

				const ctx = canvas.getContext('2d');
				if (!ctx) return;

				cropImage(ctx, img, 0, 0, canvas.width, canvas.height);

				imgUrl = ctx.canvas.toDataURL('image/jpg');

				// console.log(imgUrl);
				setImg(imgUrl);
			};
		};
	}

	export let imgUrl: string = '';
	let imgInput: HTMLInputElement;
</script>

<div class="h-full">
	<label for="image" class="block text-lg font-semibold mb-2">Afbeelding</label>
	<button
		id="image"
		type="button"
		class={`img-button flex outline-none items-center justify-center relative rounded-lg bg-purple-400 ${
			imgUrl ? '' : 'hover:bg-purple-500'
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
		{#if imgUrl}
			<img src={imgUrl} alt="card img" class="rounded-lg overflow-hidden object-cover" />
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
