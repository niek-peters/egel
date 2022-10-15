import type { Timestamp } from "firebase/firestore";

export type PostType = {
	ownerUid: string;
	title: string;
	imgUrl?: string;
	videoUrl?: string;
	description: string;
	date: Timestamp;
};
