import {
	getDoc,
	doc,
	setDoc,
	updateDoc,
	collection,
	query,
	getDocs,
	orderBy,
	where
} from 'firebase/firestore';
import { db, storage } from '../scripts/firebaseInit';
import { ref, uploadString, getDownloadURL } from 'firebase/storage';
import type { User } from 'firebase/auth';
import type { UserDB } from '../models/user';

export async function addUser(user: User) {
	const snapshot = await getDoc(doc(db, 'Users', user.uid));

	if (!snapshot.exists())
		await setDoc(doc(db, 'Users', user.uid), {
			email: user.email,
			username: user.displayName
		});
}

export async function updatePfPic(uid: string, img: string): Promise<string> {
	let url = '';

	if (img) {
		const storageRef = ref(storage, `pf_pics/${uid}`);

		await uploadString(storageRef, img, 'data_url');

		url = await getDownloadURL(storageRef);
	}

	await updateDoc(doc(db, 'Users', uid), {
		pfPic: url
	});

	return url;
}

export async function updateUsername(uid: string, username: string) {
	return await updateDoc(doc(db, 'Users', uid), {
		username
	});
}

export async function getUser(uid: string) {
	const snapshot = await getDoc(doc(db, 'Users', uid));

	if (snapshot.exists()) {
		const data = snapshot.data();

		if (!(data as UserDB)) return;

		return data as UserDB;
	}
}

export async function getAcceptedUsers() {
	const q = query(
		collection(db, 'Users'),
		orderBy('username', 'asc'),
		where('accepted', '==', true)
	);

	const snapshot = await getDocs(q);

	const docs = snapshot.docs.map((doc) => doc.data());

	return docs.filter((doc) => doc as UserDB) as UserDB[];
}
