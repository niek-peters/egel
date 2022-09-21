<script lang="ts">
	export let time: string = '2017';
</script>

<li class="relative flex justify-center">{time}</li>

<style lang="scss">
	li {
		&::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 2rem;
			top: 2rem;
			background: rgb(0, 0, 0);
			z-index: 20;
		}
	}
</style>
