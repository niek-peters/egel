import { getUserPosts } from '../database/posts';
import { writable } from 'svelte/store';

import type { PostType } from '../models/post';

export const postsStore = writable<PostType[]>([]);

export function setPosts(posts: PostType[]) {
	postsStore.set(posts);
}

export function resetPosts() {
	postsStore.set([]);
}

export async function reloadPosts(uid: string) {
	resetPosts();

	const posts = await getUserPosts(uid);
	setPosts(posts);
}
