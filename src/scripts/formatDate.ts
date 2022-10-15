import type { Timestamp } from 'firebase/firestore';

// Date is in format YYYY-MM-DD, we convert it to DD
export function formatDate(timestamp: Timestamp) {
	const date = timestamp.toDate();

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

	return date.getDate() + ' ' + monthNames[date.getMonth()] + ' ' + date.getFullYear();
}
