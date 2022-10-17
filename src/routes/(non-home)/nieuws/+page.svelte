<script>
	import Fa from 'svelte-fa';
	import { faNewspaper } from '@fortawesome/free-regular-svg-icons';

	import Line from '../../../components/general/line.svelte';
	import LgCard from '../../../components/general/cards/lgCard.svelte';
</script>

<main class="flex flex-col items-center w-full">
	<div class="flex flex-col items-center w-full">
		<article
			class="absolute flex justify-between 2xl:w-3/5 sm:w-4/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4"
		>
			<div class="w-4/5">
				<h1 class="text-7xl font-semibold mb-8">Het nieuwste van Egel</h1>
				<p class="text-2xl">
					Er gebeurt altijd van alles binnen de Egel Community! Onze redacteurs houden het nieuws
					goed bij en zorgen ervoor dat jij op de hoogte bent van alle ontwikkelingen binnen de Egel
					Community.
					<br />
					Zo weet jij altijd wat er speelt en mis je nooit meer een belangrijke update. Vooral over de
					gebeurtenissen in de buurt van Polië-Nederland lees je veel.
				</p>
			</div>
			<Fa
				style="font-size: 24rem;"
				class="absolute left-3/4 text-purple-500/20 rotate-12"
				icon={faNewspaper}
			/>
		</article>
	</div>
	<div style="margin-bottom: 84vh;" />
	<Line />
	<LgCard>nieuws lol</LgCard>
</main>

<style lang="scss">
	.background1 {
		background-image: -webkit-linear-gradient(95deg, rgb(229 231 235) 50%, white 50.3%);
	}

	.background2 {
		background-image: -webkit-linear-gradient(95deg, white 50%, rgb(229 231 235) 50.3%);
	}
</style>
