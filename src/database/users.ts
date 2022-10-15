import {
	getDoc,
	doc,
	setDoc,
	updateDoc,
	collection,
	query,
	getDocs,
	orderBy,
	where,
	deleteField,
	deleteDoc
} from 'firebase/firestore';
import { db, storage } from '../scripts/firebaseInit';
import { ref, uploadString, getDownloadURL, deleteObject } from 'firebase/storage';
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
	const docs = snapshot.docs.map((doc) => {
		return {
			uid: doc.id,
			...doc.data()
		};
	});

	return docs.filter((doc) => doc as UserDB) as UserDB[];
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

export async function updateBio(uid: string, bio: string) {
	return await updateDoc(doc(db, 'Users', uid), {
		bio
	});
}

export async function updateYoutube(uid: string, youtube: string) {
	return await updateDoc(doc(db, 'Users', uid), {
		'links.youtube': youtube
	});
}

export async function updateReddit(uid: string, reddit: string) {
	return await updateDoc(doc(db, 'Users', uid), {
		'links.reddit': reddit
	});
}

export async function updateTwitter(uid: string, twitter: string) {
	return await updateDoc(doc(db, 'Users', uid), {
		'links.twitter': twitter
	});
}

export async function updateGithub(uid: string, github: string) {
	return await updateDoc(doc(db, 'Users', uid), {
		'links.github': github
	});
}

export async function updateMemberSince(uid: string, memberSince: string) {
	return await updateDoc(doc(db, 'Users', uid), {
		'other.memberSince': memberSince
	});
}

export async function updateRealName(uid: string, realName: string) {
	return await updateDoc(doc(db, 'Users', uid), {
		'other.realName': realName
	});
}

export async function updateFavoriteGame(uid: string, favoriteGame: string) {
	return await updateDoc(doc(db, 'Users', uid), {
		'other.favoriteGame': favoriteGame
	});
}

export async function updateHobby(uid: string, hobby: string) {
	return await updateDoc(doc(db, 'Users', uid), {
		'other.hobby': hobby
	});
}

export async function resetUser(user: User) {
	return await updateDoc(doc(db, 'Users', user.uid), {
		links: deleteField(),
		bio: deleteField(),
		pfPic: deleteField(),
		username: user.displayName
	});
}

export async function deleteUser(uid: string) {
	const storageRef = ref(storage, `pf_pics/${uid}`);

	await deleteObject(storageRef);

	return await deleteDoc(doc(db, 'Users', uid));
}
