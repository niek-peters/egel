<script lang="ts">
	export let title: string = 'here';
	export let url: string = '/';
	export let blank: boolean = false;
</script>

<a
	class="text-purple-500 hover:text-purple-700 border-b border-transparent hover:border-purple-700 transition"
	target={blank ? '_blank' : '_self'}
	href={url}>{title}</a
>
