import { defineConfig } from "vite";

export default defineConfig({
	build: {
		emptyOutDir: true,
	},
  resolve: {
    alias: {
     '#value-object': new URL('./src/value-object', import.meta.url).pathname,
    },
  },
});