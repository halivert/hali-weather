import { defineNuxtConfig } from "nuxt"

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	css: ["@/assets/css/main.css"],
	typescript: {
		shim: false,
		strict: true,
		typeCheck: true,
	},
	runtimeConfig: {},
	build: {
		postcss: {
			postcssOptions: {
				plugins: {
					tailwindcss: {},
					autoprefixer: {},
				},
			},
		},
	},
	modules: ["@vueuse/nuxt"],
})
