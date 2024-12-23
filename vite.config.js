import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		watch: {
			usePolling: true, // Enables polling for file changes
			interval: 2000, // Adjust polling interval if necessary
		},
	},
});
