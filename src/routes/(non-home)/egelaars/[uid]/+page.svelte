<script lang="ts">
	import Fa from 'svelte-fa';
	import { faCheckCircle, faClock } from '@fortawesome/free-regular-svg-icons';
	import { faGamepad, faPaintBrush, faPerson } from '@fortawesome/free-solid-svg-icons';
	import { faYoutube, faTwitter, faReddit, faGithub } from '@fortawesome/free-brands-svg-icons';
	import { Circle } from 'svelte-loading-spinners/src';

	import { page } from '$app/stores';
	import type { UserDB } from 'src/models/user';
	import { onMount } from 'svelte';

	import { getUserPosts } from '../../../../database/posts';
	import { getUser } from '../../../../database/users';
	import { formatDate } from '../../../../scripts/formatDate';
	import { authStore } from '../../../../stores/auth';
	import { setPosts } from '../../../../stores/posts';

	import FullCard from '../../../../components/general/fullCard.svelte';
	import PfPic from '../../../../components/user/pfPic.svelte';
	import Line from '../../../../components/general/line.svelte';
	import WideLine from '../../../../components/general/wideLine.svelte';
	import Gallery from '../../../../components/user/gallery.svelte';
	import NewPost from '../../../../components/user/newPost.svelte';

	let user: UserDB;
	let loaded = false;
	let myProfile = false;

	onMount(load);
	$: $page.params.uid, load();
	$: $authStore, load();

	async function load() {
		const temp = await getUser($page.params.uid);
		if (temp) user = temp;

		myProfile = $authStore.user != null && $page.params.uid == $authStore.user.uid;

		loaded = true;
	}

	async function getPosts() {
		setPosts(await getUserPosts($page.params.uid));
	}

	getPosts();
</script>

<FullCard title={!loaded ? 'Profiel laden...' : user ? 'Egelaar: ' + user.username : 'Helaas...'}>
	{#if user}
		<div class="wrapper flex flex-col gap-12 items-center">
			<div class="flex w-full gap-8 justify-between">
				<div class="flex flex-col w-2/5">
					<div
						class="flex flex-col py-8 gap-4 items-center justify-center bg-gray-200/50 rounded-lg"
					>
						<PfPic pfPicUrl={user.pfPic} />
						<h2 class="flex items-center gap-2 text-4xl mb-2">
							{#if user.accepted}
								<div class="accepted relative flex items-center justify-center rounded-full">
									<Fa icon={faCheckCircle} class="text-purple-400" />
								</div>
							{/if}
							<b>{user.username}</b>
						</h2>

						{#if user.links}
							<div class="flex justify-center w-3/5 gap-2">
								{#if user.links.youtube}
									<a href={user.links.youtube} target="_blank">
										<Fa icon={faYoutube} class="text-2xl text-red-500" />
									</a>
								{/if}
								{#if user.links.reddit}
									<a href={user.links.reddit} target="_blank">
										<Fa icon={faReddit} class="text-2xl text-orange-600" />
									</a>
								{/if}
								{#if user.links.twitter}
									<a href={user.links.twitter} target="_blank">
										<Fa icon={faTwitter} class="text-2xl text-blue-400" />
									</a>
								{/if}
								{#if user.links.github}
									<a href={user.links.github} target="_blank">
										<Fa icon={faGithub} class="text-2xl text-gray-800" />
									</a>
								{/if}
							</div>
						{/if}
					</div>
				</div>
				<div class="flex flex-col w-7/12 pt-6">
					{#if user.bio}
						<div>
							<h3 class="font-semibold">Over mij:</h3>
							<p>{user.bio}</p>
						</div>
					{/if}
					{#if user.bio && user.groups}
						<WideLine color="bg-gray-200" />
					{/if}
					{#if user.groups}
						<div>
							<h3 class="font-semibold">Lid van groepen:</h3>
							<div class="grid grid-cols-3">
								{#each user.groups as group}
									<p>{group}</p>
								{/each}
							</div>
						</div>
					{/if}
				</div>
			</div>
			{#if user.other}
				<div class="flex justify-center gap-32 w-full">
					{#if user.other.memberSince}
						<div class="flex flex-col items-center gap-1">
							<h5 class="flex items-center text-xl font-semibold gap-2">
								<Fa icon={faClock} />Egelaar sinds:
							</h5>
							<p class="text-lg">{formatDate(user.other?.memberSince)}</p>
						</div>
					{/if}
					{#if user.other.realName}
						<div class="flex flex-col items-center gap-1">
							<h5 class="flex items-center text-xl font-semibold gap-2">
								<Fa icon={faPerson} />Echte naam:
							</h5>
							<p class="text-lg">{user.other.realName}</p>
						</div>
					{/if}
					{#if user.other.favoriteGame}
						<div class="flex flex-col items-center gap-1">
							<h5 class="flex items-center text-xl font-semibold gap-2">
								<Fa icon={faGamepad} />Favoriete game:
							</h5>
							<p class="text-lg">{user.other.favoriteGame}</p>
						</div>
					{:else if user.other.hobby}
						<div class="flex flex-col items-center gap-1">
							<h5 class="flex items-center text-xl font-semibold gap-2">
								<Fa icon={faPaintBrush} />Hobby:
							</h5>
							<p class="text-lg">{user.other.hobby}</p>
						</div>
					{/if}
				</div>
			{/if}
			<Line color="bg-gray-200" />
			<div class="w-full flex flex-col items-center gap-6 -mt-6">
				<div class="flex flex-col items-center w-full gap-2">
					<h2 class="text-2xl font-semibold">
						{myProfile ? 'Jouw posts' : `Posts van ${user.username}`}
					</h2>
					{#if myProfile}
						<NewPost />
					{/if}
				</div>
				<Gallery />
			</div>
		</div>
	{:else if loaded}
		<div class="wrapper flex flex-col items-center justify-center gap-6">
			<h2 class="text-4xl font-semibold">Egelaar niet gevonden</h2>
			<p>Deze egelaar bestaat niet of is verwijderd.</p>
		</div>
	{:else}
		<div class="wrapper flex flex-col items-center justify-center">
			<Circle color="#9CA3AF" />
		</div>
	{/if}
</FullCard>

<style>
	.wrapper {
		min-height: 31rem;
	}
</style>
