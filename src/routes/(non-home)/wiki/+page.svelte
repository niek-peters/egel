<script>
	import Fa from 'svelte-fa';
	import { faBook } from '@fortawesome/free-solid-svg-icons';

	import Line from '../../../components/general/line.svelte';
	import Groups from '../../../components/groups/groups.svelte';

	import TermsList from '../../../components/wiki/termsList.svelte';
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
	<TermsList />

	<!-- Discord Widget -->
	<div class="flex flex-col items-center relative w-full my-12 bg-gray-200" id="discord">
		<Line color="bg-gray-300" />
		<div class="background1 absolute -top-96 h-96 w-full -z-40" />

		<article class="relative flex justify-between 2xl:w-3/5 sm:w-4/5">
			<div class="w-1/3">
				<h1 class="text-4xl font-semibold mb-4 border-b border-gray-300 pb-3">
					Onze Discord server
				</h1>
				<p class="text-lg">
					De Egel Community heeft ook een Discord server! <br /> Het is ons hoofdkwartier. Hier worden
					al onze snode plannen gesmeed, spelen we onze favoriete games en houden we gezellige gesprekken.
					Het is dé online hangplek voor de Egel Community! Hier kunt u de online leden van de server
					zien.
				</p>
			</div>
			<iframe
				class="w-3/5 h-96 shadow-2xl"
				src="https://discord.com/widget?id=614885752207310879&theme=dark"
				title="Discord Widget"
				allowtransparency={true}
				frameborder="0"
				sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
			/>
		</article>

		<div class="background2 absolute -bottom-96 h-96 w-full -z-40" />
		<Line color="bg-gray-300" />
	</div>
	<Groups />
</main>

<style lang="scss">
	.background1 {
		background-image: -webkit-linear-gradient(95deg, rgb(229 231 235) 50%, white 50.3%);
	}

	.background2 {
		background-image: -webkit-linear-gradient(95deg, white 50%, rgb(229 231 235) 50.3%);
	}
</style>
