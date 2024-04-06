/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			'sm': '300px',
			'md': '568px',
			'lg': '7024px',
			'xl': '1080px',
			'2xl': '1336px',
			'tt': '900px',
			'dkt': '1200px',
		  },
	},
	plugins: [],
}

export default config
