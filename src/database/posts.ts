import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDocs,
	orderBy,
	query,
	Timestamp,
	where
} from 'firebase/firestore';
import { db, storage } from '../scripts/firebaseInit';
import { ref, uploadString, getDownloadURL, deleteObject } from 'firebase/storage';
import type { PostDB, PostType } from '../models/post';
import { ulid } from 'ulid';

export async function addPost(post: PostDB) {
	let url = '';

	if (post.imgUrl) {
		const storageRef = ref(storage, `posts/${ulid()}`);

		await uploadString(storageRef, post.imgUrl, 'data_url');

		url = await getDownloadURL(storageRef);
	}

	await addDoc(collection(db, 'Posts'), {
		ownerUid: post.ownerUid,
		title: post.title,
		imgUrl: url,
		videoUrl: post.videoUrl || '',
		description: post.description,
		date: Timestamp.now()
	});
}

export async function getUserPosts(uid: string) {
	const q = query(collection(db, 'Posts'), where('ownerUid', '==', uid), orderBy('date', 'desc'));

	const snapshot = await getDocs(q);

	const docs = snapshot.docs.map((doc) => {
		return {
			uid: doc.id,
			...doc.data()
		};
	});

	return docs.filter((doc) => doc as PostType) as PostType[];
}

export async function deletePost(uid: string) {
	const storageRef = ref(storage, `posts/${uid}`);

	await deleteObject(storageRef);

	return await deleteDoc(doc(db, 'Posts', uid));
}
