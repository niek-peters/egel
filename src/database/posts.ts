import { addDoc, collection, getDocs, orderBy, query, Timestamp, where } from 'firebase/firestore';
import { db, storage } from '../scripts/firebaseInit';
import { ref, uploadString, getDownloadURL } from 'firebase/storage';
import type { PostType } from '../models/post';
import { ulid } from 'ulid';

export async function addPost(post: PostType) {
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

	const docs = snapshot.docs.map((doc) => doc.data());

	return docs.filter((doc) => doc as PostType) as PostType[];
}
