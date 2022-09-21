export type Event = {
	title: string;
	date: string;
	description: string;
	img: string;
};

// Date is in format YYYY-MM-DD, we convert it to DD
export function formatDate(dateString: string) {
	const date = new Date(dateString);

	const monthNames = [
		'Januari',
		'Februari',
		'Maart',
		'April',
		'Mei',
		'Juni',
		'Juli',
		'Augustus',
		'September',
		'Oktober',
		'November',
		'December'
	];

	return date.getDate() + ' ' + monthNames[date.getMonth() - 1] + ' ' + date.getFullYear();
}
