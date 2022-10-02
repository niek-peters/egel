<script lang="ts">
	import Fa from 'svelte-fa';
	import { faUser, faAddressCard } from '@fortawesome/free-regular-svg-icons';
	import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
	import { faGoogle } from '@fortawesome/free-brands-svg-icons';

	import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
	import { doc, setDoc, getFirestore } from 'firebase/firestore';

	import { authStore } from '../../stores/auth';

	let menuEl: HTMLUListElement;

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

	function toggleMenu() {
		if (!menuEl) return;

		menuEl.classList.toggle('opacity-100');
		menuEl.classList.toggle('opacity-0');
	}
</script>

<div class="text-lg">
	{#if $authStore.isLoggedIn && $authStore.user}
		<div class="relative">
			<button class="flex justify-between items-center font-semibold" on:click={toggleMenu}
				>{$authStore.user.displayName}
				<div class="flex justify-center items-center bg-white/10 w-10 h-10 rounded-full ml-4">
					<Fa icon={faUser} />
				</div>
			</button>
			<ul
				class="absolute flex flex-col items-start w-48 top-14 right-0 bg-gray-200 text-black text-lg p-4 rounded-lg opacity-0 transition"
				bind:this={menuEl}
			>
				<li class="flex items-center cursor-pointer mb-1 hover:text-gray-600 transition">
					<Fa icon={faAddressCard} class="mr-3" />Mijn account
				</li>
				<li
					class="flex items-center cursor-pointer hover:text-gray-600 transition"
					on:click|preventDefault={logout}
				>
					<Fa icon={faArrowRightFromBracket} class="mr-3" />Uitloggen
				</li>
			</ul>
		</div>
	{:else}
		<button
			class="flex justify-center items-center font-semibold"
			on:click|preventDefault={loginWithGoogle}
		>
			<Fa class="mr-2" icon={faGoogle} /> Login
		</button>
	{/if}
</div>
