import { collection, query, getDocs, orderBy, where } from 'firebase/firestore';
import { db } from '../scripts/firebaseInit';
import { addDoc } from 'firebase/firestore';

import type { Term } from '../models/term';

export async function getTerms() {
	const q = query(collection(db, 'Terms'), orderBy('term', 'asc'), where('accepted', '==', true));

	const snapshot = await getDocs(q);

	const docs = snapshot.docs.map((doc) => doc.data());

	return docs.filter((doc) => doc as Term) as Term[];
}

export async function addTerm(term: string, definition: string) {
	await addDoc(collection(db, 'Terms'), {
		term,
		definition,
		accepted: false
	});
}
