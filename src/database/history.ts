import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '../scripts/firebaseInit';

export async function getHistory() {
	const q = query(collection(db, 'History'));

	const snapshot = await getDocs(q);

	return snapshot.docs.map((doc) => doc.data());
}
