<script lang="ts">
	import YouTube from './links/youtube.svelte';
	import Reddit from './links/reddit.svelte';
	import Twitter from './links/twitter.svelte';
	import GitHub from './links/github.svelte';
</script>

<div class="flex flex-col items-center">
	<h4 class="text-lg mb-2 font-semibold">Links:</h4>
	<ul>
		<li>
			<YouTube />
		</li>
		<li>
			<Reddit />
		</li>
		<li>
			<Twitter />
		</li>
		<li>
			<GitHub />
		</li>
	</ul>
</div>
