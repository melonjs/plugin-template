import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vitest/config";

// melonJS needs a real canvas and DOM, so the tests run in a headless
// browser, as melonJS's own tests do
export default defineConfig({
	test: {
		include: ["tests/**/*.spec.ts"],
		browser: {
			enabled: true,
			provider: playwright(),
			instances: [{ browser: "chromium", headless: true }],
		},
	},
});
