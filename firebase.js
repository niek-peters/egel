// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
