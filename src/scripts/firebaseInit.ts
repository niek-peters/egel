import { initializeApp } from 'firebase/app';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// import { getAnalytics } from 'firebase/analytics';
import { setAuth } from '../stores/auth';

export const firebaseConfig = {
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
export const db = getFirestore(app);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);

onAuthStateChanged(getAuth(), async (user) => {
	if (user) {
		const snapshot = await getDoc(doc(db, 'Users', user.uid));
		const data = snapshot.data();

		if (data) {
			setAuth({ user, displayName: data.username, pfPic: data.pfPic });
		}
	} else setAuth({ user });
});
