<script lang="ts">
	import Fa from 'svelte-fa';
	import { faUser } from '@fortawesome/free-solid-svg-icons';

	export let pfPicUrl: string | undefined;
</script>

<div
	class="flex outline-none items-center justify-center relative rounded-full bg-purple-300 mx-4 w-36 h-36"
>
	{#if pfPicUrl}
		<img src={pfPicUrl} alt="pf pic" class="rounded-full overflow-hidden w-36 h-36 object-cover" />
	{:else}
		<Fa icon={faUser} class="text-7xl" />
	{/if}
</div>
