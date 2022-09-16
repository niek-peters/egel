<script>
	import '../../app.scss';

	import SmallHeader from '../../components/general/smallHeader.svelte';
	import Footer from '../../components/general/footer.svelte';
</script>

<div class="w-full h-full min-h-screen flex flex-col items-center">
	<SmallHeader />
	<slot />
	<Footer />
</div>
