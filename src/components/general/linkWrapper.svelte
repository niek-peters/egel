<script lang="ts">
	import { onMount } from 'svelte';

	export let text: string;
	export let styles: string = '';

	let descriptionEl: HTMLParagraphElement;

	onMount(() => wrapLinks(text));
	$: wrapLinks(text);

	function wrapLinks(text: string) {
		if (descriptionEl) {
			descriptionEl.innerHTML = text.replace(
				/(https?:\/\/[^\s]+)/g,
				'<a class="text-purple-500 hover:text-purple-600 hover:underline" href="$1" target="_blank">$1</a>'
			);
		}
	}
</script>

<p class={styles} bind:this={descriptionEl} />
