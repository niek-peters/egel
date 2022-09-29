<script>
	import Fa from 'svelte-fa';
	import { faBook } from '@fortawesome/free-solid-svg-icons';

	import Line from '../../../components/general/line.svelte';
	import TeamCard from '../../../components/general/teamCard.svelte';

	import TermsList from '../../../components/wiki/termsList.svelte';
	import MembersList from '../../../components/wiki/membersList.svelte';
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
	<div class="flex flex-col items-center relative w-full my-12 bg-gray-200">
		<Line color="bg-gray-300" />
		<div class="background1 absolute -top-96 h-96 w-full -z-40" />
		<MembersList />
		<div class="background2 absolute -bottom-96 h-96 w-full -z-40" />
		<Line color="bg-gray-300" />
	</div>
	<TeamCard
		title="Egel Gamers"
		teamMembers={[
			{
				name: 'MeneerValk',
				img: '/meneervalk.png'
			},
			{
				name: 'Bogdan',
				img: '/bogdan.jpg'
			},
			{
				name: 'Motrix',
				img: '/motrix.png'
			},
			{
				name: 'Goeloes',
				img: '/goeloes.png'
			},
			{
				name: 'Goeloes',
				img: '/goeloes.png'
			},
			{
				name: 'Goeloes',
				img: '/goeloes.png'
			},
			{
				name: 'Goeloes',
				img: '/goeloes.png'
			},
			{
				name: 'Goeloes',
				img: '/goeloes.png'
			}
		]}
	>
		<p>
			Een groot deel van de Egel Community bestaat uit gamers. De meeste hiervan komen uit de groep
			originele Egelaars uit de 1e klas. Samen spelen we games als CS:GO, Minecraft, Hearts of Iron
			4 en SCP Secret Laboratory. We houden vaak vriendelijke toernooien of spelen 's avonds
			gezellig samen.
		</p>
	</TeamCard>
	<Line />
	<TeamCard
		title="The Noob Group (aka The Next Generation)"
		teamMembers={[
			{
				name: 'Keindert',
				img: '/goeloes.png'
			},
			{
				name: 'Wouter van der Ven',
				img: '/wouter.png'
			},
			{
				name: 'Jarvis',
				img: '/goeloes.png'
			},
			{
				name: 'Joep',
				img: '/goeloes.png'
			}
		]}
	>
		<p>
			Een groep vrienden waarvan de meesten bij elkaar in een 3 VWO klas zaten, die grotendeels
			tijdens de 4e klas bij de Egel Community zijn gegaan.
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
