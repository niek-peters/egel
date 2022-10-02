import type { User } from 'firebase/auth';

export type UserType = {
	user: User | null;
	displayName?: string;
	pfPic?: string;
};
