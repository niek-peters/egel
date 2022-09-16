<div class="relative w-full flex justify-center mt-auto">
	<div class="bg absolute bottom-0 w-full -z-10" />
	<footer class="flex w-1/3 justify-center mb-12 z-10 text-white">
		<h3 class="text-lg">
			Copyright &copy; | <a
				class="border-b hover:text-gray-300 hover:border-gray-300 transition"
				href="https://github.com/Egel-Developers"
				target="_blank">Egel Developers</a
			> 2022
		</h3>
	</footer>
</div>

<style lang="scss">
	/* .bg {
		height: 48rem;
		background-image: -webkit-linear-gradient(95deg, rgb(168 85 247) 50%, white 50.3%);
	} */

	.bg {
		height: 24rem;
		background-image: url('/bg-1.svg');
		background-size: cover;
		background-position: center;
		z-index: -60;

		&:after {
			content: '';
			position: absolute;
			top: -6rem;
			left: -4rem;
			height: 14rem;
			width: 110%;
			background: white;
			transform: rotate(-5deg);
			z-index: -50;
		}
	}
</style>
