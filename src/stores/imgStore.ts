import { writable } from 'svelte/store';

export const imgStore = writable<string>();

export function setImg(img: string) {
	imgStore.set(img);
}
