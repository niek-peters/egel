export function getVideoId(url: string) {
	const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
	const match = url?.match(regExp);

	return match && match[2].length === 11 ? match[2] : null;
}

export function getEmbedUrl(url: string) {
	const videoId = getVideoId(url);

	return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
}
