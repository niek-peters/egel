<script lang="ts">
	import RealName from './other/realName.svelte';
	import FavoriteGame from './other/favoriteGame.svelte';
	import Hobby from './other/hobby.svelte';
</script>

<div class="flex flex-col items-center">
	<h4 class="text-lg mb-2 font-semibold">Overig:</h4>
	<ul>
		<li>
			<RealName />
		</li>
		<li>
			<FavoriteGame />
		</li>
		<li>
			<Hobby />
		</li>
	</ul>
</div>
