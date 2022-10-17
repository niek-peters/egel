<script lang="ts">
	export let color: string = 'bg-gray-100';
	export let id: string | undefined = undefined;
</script>

<div class={`2xl:w-2/3 sm:w-4/5 h-px ${color} my-8`} {id} />
