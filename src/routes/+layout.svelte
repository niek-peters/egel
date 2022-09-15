<script>
	import '../app.scss';

	import Header from '../components/general/header.svelte';
	import Footer from '../components/general/footer.svelte';
</script>

<div class="w-full h-full flex flex-col items-center">
	<Header />
	<slot />
	<Footer />
</div>
