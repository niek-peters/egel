import { collection, query, getDocs, orderBy } from 'firebase/firestore';
import { db } from '../scripts/firebaseInit';

export async function getHistory() {
	const q = query(collection(db, 'History'), orderBy('date', 'asc'));

	const snapshot = await getDocs(q);

	return snapshot.docs.map((doc) => doc.data());
}
