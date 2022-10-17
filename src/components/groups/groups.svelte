<script>
	import Line from '../general/line.svelte';
	import Link from '../general/link.svelte';
	import TeamCard from '../general/cards/teamCard.svelte';
</script>

<!-- Developer team card -->
<TeamCard
	title="Egel Developers"
	teamMembers={[
		{
			name: 'MeneerValk',
			img: '/meneervalk.png'
		},
		{
			name: 'Milanutje',
			img: '/milanutje.png'
		},
		{
			name: 'Motrix',
			img: '/motrix.png'
		},
		{
			name: 'Goeloes',
			img: '/goeloes.png'
		}
	]}
>
	<p>
		Binnen de Egel Community hebben we ook ons eigen developer team! Makers van
		<Link title="Egelblad" url="https://niek.coderschool.eu/" blank />, <Link
			title="Egelbank"
			url="https://dev.egelbank.nl/"
			blank
		/>, <Link
			title="Egel Mods Installer"
			url="https://github.com/Egel-Developers/egel-mods-installer"
			blank
		/>, deze website en nog veel meer!
	</p>
</TeamCard>

<Line />

<!-- Creators card -->
<TeamCard
	title="Egel Creators"
	teamMembers={[
		{
			name: 'Wouter van der Ven',
			img: '/wouter.png'
		},
		{
			name: 'Milanutje',
			img: '/milanutje.png'
		},
		{
			name: 'Motrix',
			img: '/motrix.png'
		},
		{
			name: 'Bogdan',
			img: '/bogdan.jpg'
		}
	]}
>
	<p>
		Naast developers hebben we ook creatief talent! Deze leden hebben stukken gecomponeerd en
		geremixt als
		<Link
			title="Kernenergie"
			url="https://open.spotify.com/track/7yDWbmBBHzy2CWFRojeTbn?si=99e282145268426c"
			blank
		/>,
		<Link title="J.O.R.N.A" url="https://www.youtube.com/watch?v=MalS05AYzxo" blank />,
		<Link title="Gnoerks OST" url="https://www.youtube.com/watch?v=15wC98k9ujo" blank />,
		<Link title="Joep Remix" url="https://www.youtube.com/watch?v=ikWX_cCDaSU" blank />
		en
		<Link title="Meindert Remix" url="https://www.youtube.com/watch?v=dD1tov0H8cM" blank />
		. Naast muziek zijn er ook video's gemaakt als
		<Link title="Ceaseless" url="https://www.youtube.com/watch?v=7HBZ_6j4maY" blank />,
		<Link title="Buurman en Buurman" url="https://www.youtube.com/watch?v=mT2yGQxk-lY" blank />,
		<Link title="Compromised Trailer" url="https://www.youtube.com/watch?v=5m8TZo3jPYo" blank />,
		<Link title="De Achterblijvers" url="https://www.youtube.com/watch?v=pi84ZXaCgHk" blank />,
		<Link title="Egel Nieuws" url="https://www.youtube.com/watch?v=r2rns2vXI80" blank />

		en
		<Link title="SCP-SL Compilations" url="https://www.youtube.com/watch?v=7hTUwwgzHE8" blank />
		. Ten slotte ook nog
		<Link title="geweldige artikelen van Bogdan" url="https://niek.coderschool.eu/" blank />.
	</p>
</TeamCard>

<Line />

<!--Egel Historians card-->
<TeamCard
	title="Egel Historians"
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
		}
	]}
>
	<p>
		De geschiedenis schrijft zichzelf niet! Dankzij deze leden is de geschiedenis van Egel
		bijgehouden en opgeschreven. Als je vragen hebt over de geschiedenis van Egel, weet je bij wie
		je moet zijn.
	</p>
</TeamCard>

<Line />

<!--Egel Gamers card-->
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
		originele Egelaars uit de 1e klas. Samen spelen we games als CS:GO, Minecraft, Hearts of Iron 4
		en SCP Secret Laboratory. We houden vaak vriendelijke toernooien of spelen 's avonds gezellig
		samen.
	</p>
</TeamCard>

<Line />

<!--TNG card-->
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
