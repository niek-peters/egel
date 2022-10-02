import { writable } from 'svelte/store';

import type { User } from 'firebase/auth';
import type { UserType } from '../models/user';

export const authStore = writable<UserType>({
	user: null
});

export function setAuth(user: User | null) {
	authStore.set({
		user
	});
}
