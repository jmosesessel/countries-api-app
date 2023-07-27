import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
	console.log("vite config comman", command);
	const config = {
		plugins: [react(), tailwindcss("./tailwind.config.js")],
		base: "/countries-api-app/",
	};

	// if (command !== "serve") {
	// 	config.base = "/countries-api-app/";
	// }

	return config;
});
