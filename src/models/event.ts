import type { Timestamp } from 'firebase/firestore';

export type Event = {
	title: string;
	date: Timestamp;
	description: string;
	img: string;
};
