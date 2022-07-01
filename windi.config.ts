import { defineConfig } from 'windicss/helpers'


export default defineConfig({
	theme: {
		screens: {
			print: { raw: 'print' },
		},
	},
	extract: {
		include: ['**/*.{vue,html,jsx,tsx,ts,js}'],
	},
	variants: {
	}
})
