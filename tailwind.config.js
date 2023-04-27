/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: [
		'./src/pages/**/*.{js,jsx,ts,tsx}',
		'./src/components/**/*{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			colors: {
				green: {
					100: '#ebfbee',
					200: '#d3f9d8',
					300: '#b2f2bb',
					400: '#8ce99a',
					500: '#69db7c',
					600: '#51cf66',
					700: '#1864ab',
					800: '#40c057',
					900: '#2f9e44',
					950: '#2b8a3e',
				},
				blue: {
					100: '#e7f5ff',
					200: '#d0ebff',
					300: '#a5d8ff',
					400: '#74c0fc',
					500: '#4dabf7',
					600: '#339af0',
					700: '#228be6',
					800: '#1c7ed6',
					900: '#1971c2',
					950: '#1864ab',
				},
			},
		},
	},
	plugins: [],
};
