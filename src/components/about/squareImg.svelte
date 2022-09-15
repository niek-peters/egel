<script lang="ts">
	export let title: string = 'Jarnis';
	export let img: string = '/egelleeft.png';
</script>

<div class="flex flex-col items-center w-1/5">
	<p class="text-xl font-semibold mb-2">{title}</p>
	<img class="aspect-square w-full rounded-md" src={img} alt="{title} foto" />
</div>
