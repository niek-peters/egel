<script lang="ts">
	import FullCard from './fullCard.svelte';
	import SquareImg from '../../about/squareImg.svelte';

	export let title: string = 'Egelaars';

	type TeamMember = {
		name: string;
		img: string;
	};

	export let teamMembers: TeamMember[] = [
		{
			name: 'Egelaar',
			img: '/egelleeft.png'
		},
		{
			name: 'Egelaar',
			img: '/egelleeft.png'
		},
		{
			name: 'Egelaar',
			img: '/egelleeft.png'
		},
		{
			name: 'Egelaar',
			img: '/egelleeft.png'
		}
	];
</script>

<div class="flex flex-col items-center w-full">
	<FullCard {title}>
		<slot />
		<div class="grid grid-cols-4 gap-12 w-full mt-8">
			{#each teamMembers as teamMember}
				<SquareImg title={teamMember.name} img={teamMember.img} />
			{/each}
		</div>
	</FullCard>
</div>
