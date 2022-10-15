import type { Timestamp } from 'firebase/firestore';

export type PostDB = {
	ownerUid: string;
	title: string;
	imgUrl?: string;
	videoUrl?: string;
	description: string;
	date: Timestamp;
};

export type PostType = {
	uid: string;
	ownerUid: string;
	title: string;
	imgUrl?: string;
	videoUrl?: string;
	description: string;
	date: Timestamp;
};
