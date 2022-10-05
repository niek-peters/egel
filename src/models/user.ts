import type { User } from 'firebase/auth';

export type Links = {
	youtube: string;
	reddit: string;
	twitter: string;
	github: string;
};

export type UserType = {
	user: User | null;
	username?: string;
	pfPic?: string;
	bio?: string;
	links?: Links;
};

export type UserDB = {
	username: string;
	email: string;
	pfPic?: string;
	accepted?: boolean;
	links?: Links;
};
