import { addUser } from '../database/users';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { setAuth, updateAuth } from '../stores/auth';
import { goto } from '$app/navigation';

export async function loginWithGoogle() {
	try {
		const provider = new GoogleAuthProvider();

		const auth = getAuth();
		const { user } = await signInWithPopup(auth, provider);

		await addUser(user);

		updateAuth(user);
	} catch (e) {
		console.log(e);
	}
}

export async function logout(routeId: string) {
	try {
		const auth = getAuth();
		await signOut(auth);

		setAuth({ user: null });
	} catch (e) {
		console.log(e);
	} finally {
		if (routeId.includes('(non-home)/(settings)')) goto('/');
	}
}
