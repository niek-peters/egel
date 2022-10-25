<script lang="ts">
	import Fa from 'svelte-fa';
	import { faYoutube, faTwitter, faReddit, faGithub } from '@fortawesome/free-brands-svg-icons';

	import type { Links } from '../../models/user';

	export let links: Links | undefined;
</script>

{#if links}
	<div class="flex justify-center w-3/5 gap-2">
		{#if links.youtube}
			<a href={links.youtube} target="_blank">
				<Fa icon={faYoutube} class="text-2xl text-red-500" />
			</a>
		{/if}
		{#if links.reddit}
			<a href={links.reddit} target="_blank">
				<Fa icon={faReddit} class="text-2xl text-orange-600" />
			</a>
		{/if}
		{#if links.twitter}
			<a href={links.twitter} target="_blank">
				<Fa icon={faTwitter} class="text-2xl text-blue-400" />
			</a>
		{/if}
		{#if links.github}
			<a href={links.github} target="_blank">
				<Fa icon={faGithub} class="text-2xl text-gray-800" />
			</a>
		{/if}
	</div>
{/if}
