<script lang="ts">
	import type { NewsItem } from '../../models/news';
	import NewsCard from './newsCard.svelte';

	let newsItems: NewsItem[] = [
		{
			uid: '0',
			title: 'Catastrofaal snuifincident Stalingrad',
			description:
				'Morgen, bij de Toren van Pizza, heeft er een catastrofaal snuifincident plaatsgevonden. De oorzaak van dit ongeval is nog onbekend. We verwachten de uitslag spoedig, want Mortis zit in ons team. Er zijn 22 doden gevallen en 1 persoon kan niet meer snuiven. Verwacht wordt dat Trotski een handje heeft gehad in het incident.',
			date: '3 Januari 2021',
			location: 'Stalingrad',
			author: 'Nanniek van Mulligen',
			authorId: 'AFKK75DpaFfDpO2OPJ5MNz6pXkJ2',
			image: '/snuifincident.jpg'
		},
		{
			uid: '1',
			title: 'Covalentie van barium flink gestegen',
			description:
				'Nieuw onderzoek toont aan dat de covalentie van barium recent is gestegen. Een internationaal onderzoek dat begin September is begonnen toont aan dat de covalentie van barium in 2020 is gestegen. De gevolgen van dit fenomeen zijn op dit moment nog onbekend. Wel wordt verwacht dat het snuifgevaar van bijvoorbeeld cocaïne in verband met de reinfactor en de lengte van de tijd drastisch is gedaald.',
			date: '29 December 2020',
			location: 'Polië-Nederland',
			author: 'Bogdan',
			authorId: 'AFKK75DpaFfDpO2OPJ5MNz6pXkJ2',
			image: '/barium.jpg'
		},
		{
			uid: '2',
			title: "Professor G. Brock ontdekt medicijn tegen Jezusn't",
			description:
				"Professor Gnocchi Brock, zoon van prof. Knokker Brock, die werkt bij het KNIL (Koninklijk Nederlands Instituut Longboarden) en EGEL (het Engelse Giga-School Egel Laboratorium), heeft per 6 uur 's ochtends op 2 Januari 2021 een methode ontdekt waarmee een medicijn tegen Jezusn't gemaakt kan worden.",
			date: '2 Januari 2021',
			location: 'Polië-Nederland',
			author: 'Narnik met de Knik',
			authorId: 'AFKK75DpaFfDpO2OPJ5MNz6pXkJ2',
			image: '/medicijn.jpg'
		},
		{
			uid: '3',
			title: 'Catastrofaal snuifincident Stalingrad',
			description:
				'Morgen, bij de Toren van Pizza, heeft er een catastrofaal snuifincident plaatsgevonden. De oorzaak van dit ongeval is nog onbekend. We verwachten de uitslag spoedig, want Mortis zit in ons team. Er zijn 22 doden gevallen en 1 persoon kan niet meer snuiven. Verwacht wordt dat Trotski een handje heeft gehad in het incident.',
			date: '3 Januari 2021',
			location: 'Stalingrad',
			author: 'Nanniek van Mulligen',
			authorId: 'AFKK75DpaFfDpO2OPJ5MNz6pXkJ2',
			image: '/snuifincident.jpg'
		},
		{
			uid: '4',
			title: 'Covalentie van barium flink gestegen',
			description:
				'Nieuw onderzoek toont aan dat de covalentie van barium recent is gestegen. Een internationaal onderzoek dat begin September is begonnen toont aan dat de covalentie van barium in 2020 is gestegen. De gevolgen van dit fenomeen zijn op dit moment nog onbekend. Wel wordt verwacht dat het snuifgevaar van bijvoorbeeld cocaïne in verband met de reinfactor en de lengte van de tijd drastisch is gedaald.',
			date: '29 December 2020',
			location: 'Polië-Nederland',
			author: 'Bogdan',
			authorId: 'AFKK75DpaFfDpO2OPJ5MNz6pXkJ2',
			image: '/barium.jpg'
		},
		{
			uid: '5',
			title: "Professor G. Brock ontdekt medicijn tegen Jezusn't",
			description:
				"Professor Gnocchi Brock, zoon van prof. Knokker Brock, die werkt bij het KNIL (Koninklijk Nederlands Instituut Longboarden) en EGEL (het Engelse Giga-School Egel Laboratorium), heeft per 6 uur 's ochtends op 2 Januari 2021 een methode ontdekt waarmee een medicijn tegen Jezusn't gemaakt kan worden.",
			date: '2 Januari 2021',
			location: 'Polië-Nederland',
			author: 'Narnik met de Knik',
			authorId: 'AFKK75DpaFfDpO2OPJ5MNz6pXkJ2',
			image: '/medicijn.jpg'
		}
	];
</script>

<div class="grid grid-cols-3 w-4/5 gap-8 my-12">
	{#each newsItems as newsItem}
		<NewsCard {newsItem} />
	{/each}
</div>
