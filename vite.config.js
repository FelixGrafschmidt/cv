import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
	build: {},
	optimizeDeps: {
		include: [
			'vue',
		]
	},
	plugins: [
		vue()
	]
});