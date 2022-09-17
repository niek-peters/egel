<script lang="ts">
	import { getAuth, signInWithPopup, GoogleAuthProvider, type UserCredential } from 'firebase/auth';

	import { authStore } from '../../stores/auth';

	async function loginWithGoogle() {
		try {
			const provider = new GoogleAuthProvider();

			const auth = getAuth();
			const user: UserCredential = await signInWithPopup(auth, provider);

			console.log(user);
		} catch (e) {
			console.log(e);
		}
	}
</script>

<header class="flex sm:w-3/5 mxl:w-2/5 items-center justify-between my-4 z-10 text-white">
	<h1 class="w-16 text-3xl font-bold"><a href="/">Egel</a></h1>
	<nav class="font-semibold text-lg">
		<a
			class="mx-4 border-b border-transparent hover:text-gray-200 hover:border-gray-200 transition"
			href="/">Over ons</a
		>
		<a
			class="mx-4 border-b border-transparent hover:text-gray-200 hover:border-gray-200 transition"
			href="/geschiedenis">Geschiedenis</a
		>
		<a
			class="mx-4 border-b border-transparent hover:text-gray-200 hover:border-gray-200 transition"
			href="/online">Online</a
		>
	</nav>
	<h1 class="w-16 text-xl font-bold">
		{#if $authStore.isLoggedIn}
			Logged in! {$authStore.user.displayName}
		{:else}
			<button on:click|preventDefault={loginWithGoogle}>Login</button>
		{/if}
	</h1>
</header>
<div class="absolute w-full" />

<style lang="scss">
	/* div {
		height: 48rem;
		background-image: -webkit-linear-gradient(95deg, white 50%, rgb(168 85 247) 50.3%);
	} */

	div {
		height: 64vh;
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
