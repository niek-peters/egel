import type { User } from 'firebase/auth';

export type UserType = {
	user: User | null;
	displayName?: string;
	pfPic?: string;
};

export type UserDB = {
	username: string;
	email: string;
	pfPic?: string;
	accepted?: boolean;
};
