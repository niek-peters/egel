import { doc, updateDoc } from 'firebase/firestore';
import { db, storage } from '../scripts/firebaseInit';
import { ref, uploadString, getDownloadURL } from 'firebase/storage';

export async function addPfPic(uid: string, img: string) {
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
