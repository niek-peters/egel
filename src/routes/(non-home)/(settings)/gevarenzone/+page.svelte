<script lang="ts">
	import Fa from 'svelte-fa';
	import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
	import { faUserSlash } from '@fortawesome/free-solid-svg-icons';

	import { authStore, updateAuth } from '../../../../stores/auth';
	import { resetUser, deleteUser } from '../../../../database/users';

	import { page } from '$app/stores';
	import { logout } from '../../../../scripts/auth';

	async function resetAccount() {
		if (!$authStore.user) return;

		await resetUser($authStore.user);

		updateAuth($authStore.user);
	}

	async function deleteAccount() {
		if (!$authStore.user) return;

		await deleteUser($authStore.user.uid);

		logout($page.routeId || '/');
	}
</script>

<div class="flex flex-col w-full items-center">
	<h2 class="text-2xl font-semibold my-4">Let op: deze acties zijn onomkeerbaar!</h2>
	<div class="grid grid-cols-2 gap-4">
		<div>
			<button
				on:click={() => {
					if (confirm('Weet je zeker dat je je profiel wilt resetten?')) resetAccount();
				}}
				class="flex items-center px-4 py-2 text-lg rounded-md m-2 text-white bg-red-500 hover:bg-red-600 transition w-72 h-11"
				><Fa icon={faUserSlash} class="mr-2" />Profiel resetten</button
			>
			<p class="text-sm w-72 mx-2">
				Hiermee wordt alle informatie die je via 'Mijn account' hebt veranderd, gereset.
			</p>
		</div>
		<div>
			<button
				on:click={() => {
					if (confirm('Weet je zeker dat je je account wilt verwijderen?')) deleteAccount();
				}}
				class="flex items-center px-4 py-2 text-lg rounded-md m-2 text-white bg-red-500 hover:bg-red-600 transition w-72 h-11"
				><Fa icon={faTrashCan} class="mr-2" />Account verwijderen</button
			>
			<p class="text-sm w-72 mx-2">
				Hiermee worden je account, je posts en alle verwijzingen naar je account verwijderd. Je
				tijdlijn inzendingen blijven bestaan.
			</p>
		</div>
	</div>
</div>
