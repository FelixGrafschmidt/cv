// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["@pinia/nuxt", "@unocss/nuxt", "nuxt-icon", "@vueuse/nuxt"],
	vite: {},
	typescript: {
		shim: false,
	},
	// app: {
	// 	head: {
	// 		script: [{ src: "https://unpkg.com/pagedjs/dist/paged.polyfill.js", async: true }],
	// 	},
	// },
});
