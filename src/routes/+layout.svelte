<script>
	import { onMount } from 'svelte';

	import { initializeApp } from 'firebase/app';
	import { onAuthStateChanged, getAuth } from 'firebase/auth';

	import { getAnalytics } from 'firebase/analytics';
	import { setAuth } from '../stores/auth';

	onMount(() => {
		const firebaseConfig = {
			apiKey: 'AIzaSyDcJ6l-KnXxk17XFbRsfNTa5gc6Xwn_Byk',
			authDomain: 'egel-79cd5.firebaseapp.com',
			projectId: 'egel-79cd5',
			storageBucket: 'egel-79cd5.appspot.com',
			messagingSenderId: '592347878958',
			appId: '1:592347878958:web:a8d1c80518b462ee6171bf',
			measurementId: 'G-L3EF1XB6PV'
		};

		// Initialize Firebase
		const app = initializeApp(firebaseConfig);
		const analytics = getAnalytics(app);

		onAuthStateChanged(getAuth(), (user) => {
			setAuth(user);
		});
	});
</script>

<slot />
