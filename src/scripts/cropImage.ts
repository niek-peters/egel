export default async function getImageUrl(imgFile: File, width = 64, height = 64) {
	if (!(imgFile as File)) return Promise.reject('No image file');

	if (!['image/jpg', 'image/jpeg', 'image/png'].includes(imgFile.type))
		return 'https://static.thenounproject.com/png/586340-200.png';

	return new Promise<string>((res, rej) => {
		const reader = new FileReader();
		reader.readAsDataURL(imgFile);
		reader.onload = function (event) {
			const imgElement = document.createElement('img');
			if (!imgElement || !event.target || !event.target.result)
				return rej("Couldn't create image element");

			imgElement.src = event.target.result as string;

			imgElement.onload = function (e) {
				const img = e.target as CanvasImageSource;
				if (
					!e.target ||
					!img.width ||
					!img.height ||
					typeof img.width !== 'number' ||
					typeof img.height !== 'number'
				)
					return rej("Couldn't load image");

				const canvas = document.createElement('canvas');
				canvas.width = width;
				canvas.height = height;

				const ctx = canvas.getContext('2d');
				if (!ctx) return rej("Couldn't get context");

				drawImage(ctx, img, 0, 0, canvas.width, canvas.height);

				res(ctx.canvas.toDataURL('image/jpg'));
			};
		};
	});
}

function drawImage(
	ctx: CanvasRenderingContext2D,
	img: CanvasImageSource,
	x: number,
	y: number,
	w: number,
	h: number,
	offsetX?: number,
	offsetY?: number
) {
	if (typeof img.width !== 'number' || typeof img.height !== 'number') return;

	if (arguments.length === 2) {
		x = y = 0;
		w = ctx.canvas.width;
		h = ctx.canvas.height;
	}

	// default offset is center
	offsetX = typeof offsetX === 'number' ? offsetX : 0.5;
	offsetY = typeof offsetY === 'number' ? offsetY : 0.5;

	// keep bounds [0.0, 1.0]
	if (offsetX < 0) offsetX = 0;
	if (offsetY < 0) offsetY = 0;
	if (offsetX > 1) offsetX = 1;
	if (offsetY > 1) offsetY = 1;

	const iw = img.width;
	const ih = img.height;
	const r = Math.min(w / iw, h / ih);
	let nw = iw * r; // new prop. width
	let nh = ih * r; // new prop. height
	let cx;
	let cy;
	let cw;
	let ch;
	let ar = 1;

	// decide which gap to fill
	if (nw < w) ar = w / nw;
	if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh; // updated
	nw *= ar;
	nh *= ar;

	// calc source rectangle
	cw = iw / (nw / w);
	ch = ih / (nh / h);

	cx = (iw - cw) * offsetX;
	cy = (ih - ch) * offsetY;

	// make sure source rectangle is valid
	if (cx < 0) cx = 0;
	if (cy < 0) cy = 0;
	if (cw > iw) cw = iw;
	if (ch > ih) ch = ih;

	// fill image in dest. rectangle
	ctx.drawImage(img, cx, cy, cw, ch, x, y, w, h);
}
