import { Application, plugin, video } from "melonjs";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { peerDependencies } from "../package.json";
import { MyPlugin, minimumEngineVersion } from "../src/index.ts";

describe("MyPlugin", () => {
	let app: Application;

	beforeAll(async () => {
		app = new Application(320, 240, {
			parent: document.body,
			renderer: video.CANVAS,
		});
		await app.init();
	});

	afterAll(() => {
		app.destroy();
	});

	it("registers, and is found in the plugin cache", () => {
		plugin.register(MyPlugin, "myPlugin");
		expect(plugin.cache.myPlugin).toBeInstanceOf(MyPlugin);
	});

	it("belongs to the application it is given", () => {
		const mine = new MyPlugin(app);
		expect(mine.app).toBe(app);
		expect(mine.hello()).toBe("hello from a 320x240 viewport");
	});

	it("asks for the melonJS version its peer range names", () => {
		expect(peerDependencies.melonjs).toContain(minimumEngineVersion());
		expect(new MyPlugin(app).version).toBe(minimumEngineVersion());
	});
});
