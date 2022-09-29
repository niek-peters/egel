import { collection, query, getDocs, orderBy, where } from 'firebase/firestore';
import type { Member } from '../models/member';
import { db } from '../scripts/firebaseInit';

export async function getMembers() {
	const q = query(
		collection(db, 'Users'),
		orderBy('username', 'asc'),
		where('accepted', '==', true)
	);

	const snapshot = await getDocs(q);

	const docs = snapshot.docs.map((doc) => doc.data());

	const terms = docs.filter((doc) => doc as Member) as Member[];

	return terms;
}
