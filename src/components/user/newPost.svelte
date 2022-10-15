<script lang="ts">
	import { faPlus } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	import { page } from '$app/stores';
	import { authStore } from '../../stores/auth';
	import { setImg, imgStore } from '../../stores/imgStore';
	import { addPost } from '../../database/posts';

	import ImgButton from './imgButtonDynamic.svelte';
	import { Timestamp } from 'firebase/firestore';
	import { postsStore, reloadPosts } from '../../stores/posts';

	let title: string;
	let description: string;
	let videoUrl: string | undefined;

	let newPostError: string;
	let success: string;

	let newPostForm: HTMLFormElement;

	$: $imgStore, clearUrl();

	function clearUrl() {
		if ($imgStore) videoUrl = undefined;
	}

	function toggleNewPost() {
		//h-0 p-0 opacity-0
		newPostForm.classList.toggle('hidden');
		newPostForm.classList.toggle('flex');
	}

	async function submitPost() {
		if (!$authStore.user) {
			newPostError = 'Je bent niet ingelogd!';
			return;
		}

		// If we are missing data, don't submit it
		if (!title || !description || !($imgStore || videoUrl)) {
			success = '';
			newPostError = 'Vul alle velden in!';
			setTimeout(() => (newPostError = ''), 2000);
			return;
		}

		if (videoUrl) {
			// Check if the video url is valid
			const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/;
			const match = videoUrl.match(regex);

			if (!match) {
				success = '';
				newPostError = 'De video url is niet geldig!';
				setTimeout(() => (newPostError = ''), 2000);
				return;
			}
		}

		await addPost({
			ownerUid: $authStore.user.uid,
			title,
			description,
			imgUrl: $imgStore,
			videoUrl,
			date: Timestamp.now()
		});

		reloadPosts($page.params.uid);

		console.log($postsStore);

		success = 'Post verstuurd!';
		setTimeout(() => {
			success = title = description = videoUrl = '';
			setImg('');
		}, 2000);
	}
</script>

<button
	on:click={toggleNewPost}
	class="flex items-center gap-2 text-lg text-purple-400 hover:text-purple-500 transition"
	><Fa icon={faPlus} />Nieuwe post</button
>
<form
	bind:this={newPostForm}
	on:submit|preventDefault={submitPost}
	class="flex-col w-full gap-4 rounded-lg bg-gray-200 p-4 hidden mt-4"
>
	<div class="flex justify-between gap-4">
		<div class="flex flex-col gap-4 w-1/2">
			<div class="w-full">
				<label for="title" class="block text-lg font-semibold mb-2">Titel</label>
				<input
					type="text"
					id="title"
					placeholder="Titel van je post"
					minlength="3"
					maxlength="50"
					required
					bind:value={title}
					class="w-full rounded-lg border outline-none border-gray-300 p-2 focus:border-purple-500 transition"
				/>
			</div>
			<div class="w-full">
				<label for="description" class="block text-lg font-semibold mb-2">Beschrijving</label>
				<textarea
					id="description"
					placeholder="Beschrijf wat je post inhoudt"
					rows="4"
					minlength="3"
					maxlength="1023"
					required
					bind:value={description}
					class="w-full  rounded-lg border outline-none border-gray-300 p-2 focus:border-purple-500 transition"
				/>
			</div>
			<button
				type="submit"
				class={`w-full rounded-lg border outline-none border-gray-300 p-2 mb-2 text-white transition ${
					newPostError
						? 'bg-red-500'
						: success
						? 'bg-green-500'
						: 'bg-purple-400 hover:bg-purple-500 '
				}`}
			>
				{newPostError ? newPostError : success ? success : 'Verstuur'}
			</button>
		</div>
		<div class="flex flex-col gap-2 w-1/2 h-full">
			<ImgButton />
			<label for="videoUrl" class="block text-lg font-semibold mb-2">Video</label>
			<input
				type="url"
				id="videoUrl"
				placeholder="YouTube video URL"
				minlength="3"
				maxlength="50"
				bind:value={videoUrl}
				on:input={() => {
					setImg('');
				}}
				class="w-full rounded-lg border outline-none border-gray-300 p-2 focus:border-purple-500 transition"
			/>
		</div>
	</div>
</form>
