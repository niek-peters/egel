<script lang="ts">
	import Fa from 'svelte-fa';
	import { faArrowRightFromBracket, faGear, faUser } from '@fortawesome/free-solid-svg-icons';
	import { faGoogle } from '@fortawesome/free-brands-svg-icons';

	import { loginWithGoogle, logout } from '../../scripts/auth';

	import { authStore } from '../../stores/auth';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	import { page } from '$app/stores';

	let menuEl: HTMLUListElement;

	onMount(() => {
		window.onclick = closeMenu;
	});

	function closeMenu() {
		if (!menuEl) return;

		menuEl.classList.remove('opacity-100');
		menuEl.classList.add('opacity-0');
	}

	function toggleMenu() {
		if (!menuEl) return;

		menuEl.classList.toggle('opacity-100');
		menuEl.classList.toggle('opacity-0');
	}
</script>

<div class="text-lg">
	{#if $authStore.user}
		<div class="relative flex justify-end w-48">
			<button
				class="flex justify-between items-center font-semibold"
				on:click|stopPropagation={toggleMenu}
				>{$authStore.username || $authStore.user.displayName}
				{#if $authStore.pfPic || $authStore.user.photoURL}
					<img
						class="w-10 h-10 rounded-full ml-4"
						src={$authStore.pfPic || $authStore.user.photoURL}
						alt="Profielfoto"
					/>
				{:else}
					<div class="flex justify-center items-center bg-white/10 w-10 h-10 rounded-full ml-4">
						<Fa icon={faUser} />
					</div>
				{/if}
			</button>
			<ul
				class="absolute flex flex-col items-start w-48 top-14 right-0 bg-gray-200 shadow-md text-black text-lg p-4 rounded-lg opacity-0 transition"
				bind:this={menuEl}
				on:click|stopPropagation
			>
				<li
					class="flex items-center cursor-pointer mb-1 hover:text-gray-600 transition"
					on:click={() => goto(`/egelaars/${$authStore.user.uid}`)}
					on:click={closeMenu}
				>
					<div class="w-8 flex justify-center"><Fa icon={faUser} class="mr-3" /></div>
					Mijn Profiel
				</li>
				<li
					class="flex items-center cursor-pointer mb-1 hover:text-gray-600 transition"
					on:click={() => goto('/mijn-account')}
					on:click={closeMenu}
				>
					<div class="w-8 flex justify-center"><Fa icon={faGear} class="mr-3" /></div>
					Instellingen
				</li>
				<li
					class="flex items-center cursor-pointer hover:text-gray-600 transition"
					on:click|preventDefault={() => logout($page.routeId || '/')}
					on:click={closeMenu}
				>
					<div class="w-8 flex justify-center">
						<Fa icon={faArrowRightFromBracket} class="mr-3" />
					</div>
					Uitloggen
				</li>
			</ul>
		</div>
	{:else}
		<button
			class="flex items-center font-semibold justify-end w-48"
			on:click|preventDefault={loginWithGoogle}
		>
			<Fa class="mr-2" icon={faGoogle} /> Login
		</button>
	{/if}
</div>
