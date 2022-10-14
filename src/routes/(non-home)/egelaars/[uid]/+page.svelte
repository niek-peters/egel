<script lang="ts">
	import Fa from 'svelte-fa';
	import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
	import { faYoutube, faTwitter, faReddit, faGithub } from '@fortawesome/free-brands-svg-icons';

	import { page } from '$app/stores';
	import type { UserDB } from 'src/models/user';
	import { onMount } from 'svelte';

	import type { PostType } from '../../../../models/post';
	import { getUser } from '../../../../database/users';

	import FullCard from '../../../../components/general/fullCard.svelte';
	import PfPic from '../../../../components/settings/pfPic.svelte';
	import Line from '../../../../components/general/line.svelte';
	import WideLine from '../../../../components/general/wideLine.svelte';
	import Gallery from '../../../../components/user/gallery.svelte';

	let user: UserDB;
	let loaded = false;

	onMount(async () => {
		const temp = await getUser($page.params.uid);
		if (temp) user = temp;

		loaded = true;
	});

	const posts: PostType[] = [
		{
			imgUrl:
				'https://images.unsplash.com/photo-1630259986871-eb113ee68f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhY2tkcm9wfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
			title: 'My first post',
			description: 'This is my first post on my profile. I hope you like it!'
		},
		{
			videoUrl: 'https://www.youtube.com/watch?v=TwIEvgidyyM',
			title: 'My first post',
			description: 'This is my first post on my profile. I hope you like it!'
		},
		{
			imgUrl: 'https://joshcollinsworth.com/images/post_images/sveltekit-learn.png',
			title: 'My first post',
			description: 'This is my first post on my profile. I hope you like it!'
		},
		{
			imgUrl:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmuI13cSUGG66lfLEB8ffXOd184PQ3G8MkMA&usqp=CAU',
			title: 'My first post',
			description: 'This is my first post on my profile. I hope you like it!'
		},
		{
			imgUrl: 'https://joshcollinsworth.com/images/post_images/sveltekit-learn.png',
			title: 'My first post',
			description: 'This is my first post on my profile. I hope you like it!'
		},
		{
			imgUrl: 'https://joshcollinsworth.com/images/post_images/sveltekit-learn.png',
			title: 'My first post',
			description: 'This is my first post on my profile. I hope you like it!'
		}
	];
</script>

{#if loaded}
	{#if user}
		<FullCard title={'Egelaar Profiel: ' + user.username}>
			<div class="wrapper flex flex-col gap-12">
				<div class="flex w-full gap-8 justify-between">
					<div class="flex flex-col w-2/5">
						<div
							class="flex flex-col py-8 gap-4 items-center justify-center bg-gray-200/50 rounded-lg"
						>
							<PfPic />
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
					<div class="flex flex-col items-center w-7/12 pt-6">
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
				<div class="flex flex-col items-center">
					<h2 class="text-2xl font-semibold -mb-4">Posts van {user.username}</h2>
					<Line color="bg-gray-200" />
					<Gallery {posts} />
				</div>
			</div>
		</FullCard>
	{/if}
{/if}
