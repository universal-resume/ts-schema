import { defineConfig } from "vite";

export default defineConfig({
	build: {
		emptyOutDir: true,
	},
  resolve: {
    alias: {
     '@annotation': new URL('./src/annotation', import.meta.url).pathname,
    },
  },
});