import { getUserPosts } from '../database/posts';
import { writable } from 'svelte/store';

import type { PostType } from '../models/post';

export const postsStore = writable<PostType[]>([]);

export function setPosts(posts: PostType[]) {
	postsStore.set(posts);
}

export async function reloadPosts(uid: string) {
	setPosts(await getUserPosts(uid));
}
