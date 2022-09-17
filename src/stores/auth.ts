import { writable } from 'svelte/store';

import type { User } from 'firebase/auth';

type AuthType = {
	isLoggedIn: boolean;
	user: User | null;
};

export const authStore = writable<AuthType>({
	isLoggedIn: false,
	user: null
});

export function setAuth(user: User | null) {
	authStore.set({
		isLoggedIn: !!user,
		user
	});
}
