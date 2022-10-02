import { writable } from 'svelte/store';

import type { UserType } from '../models/user';

export const authStore = writable<UserType>({
	user: null
});

export function setAuth(auth: UserType) {
	authStore.set({
		user: auth.user,
		displayName: auth.displayName,
		pfPic: auth.pfPic
	});
}
