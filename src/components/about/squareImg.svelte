<script lang="ts">
	export let title: string = 'Jarnis';
	export let img: string = '/egelleeft.png';
</script>

<div class="flex flex-col items-center w-full">
	<p class="text-xl font-semibold mb-2">{title}</p>
	<img class="aspect-square w-full rounded-md" src={img} alt="{title} foto" />
</div>
