import type { User } from 'firebase/auth';
import { getUser } from '../database/users';
import { writable } from 'svelte/store';

import type { UserType } from '../models/user';

export const authStore = writable<UserType>({
	user: null
});

export function setAuth(auth: UserType) {
	authStore.set({
		...auth
	});
}

export async function updateAuth(user: User) {
	const updatedUser = await getUser(user.uid);
	if (!updatedUser) return;

	console.log(updatedUser);

	setAuth({ user, ...updatedUser });
}
