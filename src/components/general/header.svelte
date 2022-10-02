<script>
	import { page } from '$app/stores';

	import AuthButton from './authButton.svelte';

	$: $page, console.log($page.routeId);

	export let small = false;
</script>

<header class="flex sm:w-3/5 2xl:w-2/5 h-10 items-center justify-between my-4 z-10 text-white">
	<h1 class="w-36 text-3xl font-bold"><a href="/">Egel</a></h1>
	<nav class="font-semibold text-lg">
		<a
			class={`${
				$page.routeId == '(home)' ? 'border-gray-200' : 'border-transparent'
			} mx-4 border-b hover:text-gray-200 hover:border-gray-200 transition`}
			href="/">Over ons</a
		>
		<a
			class={`${
				$page.routeId == '(non-home)/geschiedenis' ? 'border-gray-200' : 'border-transparent'
			} mx-4 border-b hover:text-gray-200 hover:border-gray-200 transition`}
			href="/geschiedenis">Geschiedenis</a
		>
		<a
			class={`${
				$page.routeId == '(non-home)/wiki' ? 'border-gray-200' : 'border-transparent'
			} mx-4 border-b hover:text-gray-200 hover:border-gray-200 transition`}
			href="/wiki">Wiki</a
		>
	</nav>
	<AuthButton />
</header>
<div class={`background absolute w-full ${small ? 'short' : 'tall'}`} />

<style lang="scss">
	.tall {
		height: 64vh;
	}

	.short {
		height: 36vh;
	}

	.background {
		background-image: url('/bg-1.svg');
		background-size: cover;
		background-position: center;
		z-index: -60;

		&:after {
			content: '';
			position: absolute;
			bottom: -10vh;
			left: -10vh;
			height: 26vh;
			width: 110%;
			background: white;
			transform: rotate(-5deg);
			z-index: -40;
		}
	}
</style>
