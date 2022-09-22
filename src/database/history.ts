import { collection, query, getDocs, orderBy, where } from 'firebase/firestore';
import { db, storage } from '../scripts/firebaseInit';
import { ref, uploadString, getDownloadURL } from 'firebase/storage';
import { ulid } from 'ulid';
import { addDoc, Timestamp } from 'firebase/firestore';

export async function getHistory() {
	const q = query(collection(db, 'History'), orderBy('date', 'asc'), where('accepted', '==', true));

	const snapshot = await getDocs(q);

	return snapshot.docs.map((doc) => doc.data());
}

export async function addHistory(title: string, description: string, date: Date, img: string) {
	const storageRef = ref(storage, `history/${ulid()}`);

	await uploadString(storageRef, img, 'data_url');

	const url = await getDownloadURL(storageRef);

	await addDoc(collection(db, 'History'), {
		title: title,
		description: description,
		date: Timestamp.fromDate(date),
		img: url,
		accepted: false
	});
}
