<script lang="ts">
	import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
	import { doc, setDoc, getFirestore } from 'firebase/firestore';

	import Fa from 'svelte-fa';
	import { faGoogle } from '@fortawesome/free-brands-svg-icons';

	import { authStore } from '../../stores/auth';

	async function loginWithGoogle() {
		try {
			const provider = new GoogleAuthProvider();

			const auth = getAuth();
			const { user } = await signInWithPopup(auth, provider);

			console.log(user);

			await setDoc(doc(getFirestore(), 'Users', user.uid), {
				email: user.email,
				username: user.displayName
			});
		} catch (e) {
			console.log(e);
		}
	}

	async function logout() {
		try {
			const auth = getAuth();
			await signOut(auth);

			authStore.set({ isLoggedIn: false, user: null });
		} catch (e) {
			console.log(e);
		}
	}
</script>

<div class="w-36 text-lg">
	{#if $authStore.isLoggedIn && $authStore.user}
		<button class="font-semibold" on:click|preventDefault={logout}
			>{$authStore.user.displayName}</button
		>
	{:else}
		<button
			class="flex justify-center items-center font-semibold"
			on:click|preventDefault={loginWithGoogle}
		>
			<Fa class="mr-2" icon={faGoogle} /> Login
		</button>
	{/if}
</div>
