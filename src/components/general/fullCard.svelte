<script lang="ts">
	export let title: string = 'A title';

	export let id: string | undefined = undefined;
</script>

<article class="flex justify-between my-12 2xl:w-3/5 sm:w-4/5 items-center" {id}>
	<div class="w-full p-16 bg-gray-100 rounded-lg shadow-md">
		<h2 class="text-4xl font-semibold mb-4 border-b border-gray-200 pb-3">{title}</h2>
		<div class="text-lg">
			<slot />
		</div>
	</div>
</article>
