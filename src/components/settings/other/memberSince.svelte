<script lang="ts">
	import Fa from 'svelte-fa';
	import { faCheck, faXmark, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

	import { browser } from '$app/environment';
	import { authStore, updateAuth } from '../../../stores/auth';

	import { updateMemberSince } from '../../../database/users';
	import { faClock } from '@fortawesome/free-regular-svg-icons';

	let memberSinceErr: string;
	let memberSince: string;
	let memberSinceChanged: boolean = false;

	async function changeMemberSince() {
		if (!browser) return;
		try {
			if (!$authStore.user) throw new Error('Je bent niet ingelogd');
			if (!memberSince) throw new Error('Vul de datum in waarop je lid werd');

			updateMemberSince($authStore.user.uid, memberSince);

			updateAuth($authStore.user);

			// Reset all inputs and errors
			memberSince = memberSinceErr = '';

			memberSinceChanged = true;

			setTimeout(() => {
				memberSinceChanged = false;
			}, 2000);
		} catch (er) {
			if (er instanceof Error) {
				memberSinceChanged = false;
				memberSinceErr = er.message;

				console.error(memberSinceErr);

				setTimeout(() => {
					memberSinceErr = '';
				}, 2000);
			}
		}
	}
</script>

<form class="flex items-center justify-between" on:submit|preventDefault={changeMemberSince}>
	<label for="memberSince"><Fa icon={faClock} class="text-3xl" /></label>
	<div class="flex">
		<input
			id="memberSince"
			class="p-2 h-8 text-sm rounded-l-md my-2 outline-none border-transparent focus:border-gray-400 border-2 transition w-52"
			type="date"
			placeholder="De datum waarop je lid werd"
			required
			bind:value={memberSince}
			minlength="3"
			maxlength="255"
		/>
		<button
			class={`${memberSinceErr ? 'bg-red-400 hover:bg-red-400' : ''} ${
				memberSinceChanged ? 'bg-green-400 hover:bg-green-400' : ''
			} flex items-center justify-center w-10 h-8 text-lg rounded-r-lg my-2 text-white bg-purple-400 hover:bg-purple-500 transition`}
			>{#if memberSinceErr}
				<p class="flex justify-center items-center">
					<Fa icon={faXmark} class="mr-2 text-lg" />
				</p>
			{:else if memberSinceChanged}
				<p class="flex justify-center items-center">
					<Fa icon={faCheck} class="mr-2 text-lg" />
				</p>
			{:else}
				<Fa icon={faPaperPlane} class="mr-2 text-lg" />
			{/if}</button
		>
	</div>
</form>
