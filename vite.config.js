import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import WindiCSS from "vite-plugin-windicss";
import vueI18n from "@intlify/vite-plugin-vue-i18n";

export default defineConfig({
	build: {
		minify: false,
	},
	optimizeDeps: {
		include: ["vue"],
	},
	plugins: [
		vue(),
		WindiCSS(),
		vueI18n({
			defaultSFCLang: "json",
			runtimeOnly: false,
		}),
	],
});
