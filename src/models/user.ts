import type { User } from 'firebase/auth';
import type { Timestamp } from 'firebase/firestore';

export type Links = {
	youtube: string;
	reddit: string;
	twitter: string;
	github: string;
};

export type Other = {
	memberSince: Timestamp;
	realName: string;
	favoriteGame: string;
	hobby: string;
};

export type UserType = {
	user: User | null;
	username?: string;
	pfPic?: string;
	bio?: string;
	links?: Links;
	groups?: string[];
	other?: Other;
	accepted?: boolean;
};

export type UserDB = {
	uid?: string;
	username: string;
	email: string;
	pfPic?: string;
	bio?: string;
	links?: Links;
	groups?: string[];
	other?: Other;
	accepted?: boolean;
};
