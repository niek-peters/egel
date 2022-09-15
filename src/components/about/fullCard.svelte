<script lang="ts">
	export let title: string = 'A title';
</script>

<article class="flex justify-between my-12 w-3/5 h-96 items-center">
	<div class="w-full p-16 bg-gray-50 rounded-lg shadow-md">
		<h2 class="text-4xl font-semibold mb-4 border-b border-gray-200 pb-3">{title}</h2>
		<div class="text-lg">
			<slot />
		</div>
	</div>
</article>
