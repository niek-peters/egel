/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			screens: {
				mxl: '1400px',
				'2xl': '1800px'
				// => @media (min-width: 1536px) { ... }
			}
		}
	},
	plugins: []
};
