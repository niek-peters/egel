<script>
	import Fa from 'svelte-fa';
	import { faBook } from '@fortawesome/free-solid-svg-icons';

	import Line from '../../../components/general/line.svelte';
	import TeamCard from '../../../components/general/teamCard.svelte';
</script>

<main class="flex flex-col items-center w-full">
	<div class="flex flex-col items-center w-full">
		<article
			class="absolute flex justify-between 2xl:w-3/5 sm:w-4/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4"
		>
			<div class="w-4/5">
				<h1 class="text-7xl font-semibold mb-8">De weetjes over Egel</h1>
				<p class="text-2xl">
					Binnen Egel zijn er veel verschillende gewoontes, termen en andere feitjes die handig en
					leuk zijn om te weten. Ook kan je hier lezen over de verschillende leden, groepen en teams
					binnen Egel en wat die zijn en gedaan hebben.
					<br />
					Op deze pagina staan ze allemaal op een rijtje, voor het geval je benieuwd bent wat iets betekent
					of wie er allemaal in Egel zitten.
				</p>
			</div>
			<Fa
				style="font-size: 24rem;"
				class="absolute left-3/4 text-purple-500/20 rotate-12"
				icon={faBook}
			/>
		</article>
	</div>
	<div style="margin-bottom: 84vh;" />
	<Line />

	<TeamCard
		title="Egel Historians"
		title1="MeneerValk"
		title2="Bogdan"
		title3="Motrix"
		title4="Goeloes"
		img1="/meneervalk.png"
		img2="/bogdan.jpg"
		img3="/motrix.png"
		img4="/goeloes.png"
	>
		<p>
			De geschiedenis schrijft zichzelf niet! Dankzij deze leden is de geschiedenis van Egel
			bijgehouden en opgeschreven. Als je vragen hebt over de geschiedenis van Egel, weet je bij wie
			je moet zijn.
		</p>
	</TeamCard>
</main>

<style lang="scss">
	.background1 {
		background-image: -webkit-linear-gradient(95deg, rgb(229 231 235) 50%, white 50.3%);
	}

	.background2 {
		background-image: -webkit-linear-gradient(95deg, white 50%, rgb(229 231 235) 50.3%);
	}
</style>
