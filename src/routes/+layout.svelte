<script>
	import '../app.scss';

	import Header from '../components/general/header.svelte';
</script>

<div class="w-full h-full flex flex-col items-center">
	<Header />
	<slot />
</div>
