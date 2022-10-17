<script lang="ts">
	export let id: string | undefined = undefined;
</script>

<article class="flex my-12 2xl:w-3/5 sm:w-4/5" {id}>
	<div class="w-full p-16 bg-gray-100 rounded-lg shadow-md text-lg">
		<slot />
	</div>
</article>
