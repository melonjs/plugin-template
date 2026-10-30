import { type Application, plugin } from "melonjs";
import { homepage, name, peerDependencies, version } from "../package.json";

/**
 * The lowest melonJS version this plugin runs on, taken from the package's
 * `peerDependencies` so the version lives in one place.
 *
 * `plugin.register` throws when the running engine is older than this,
 * which is what enforces it: the peer range only warns at install time, and
 * not at all when the engine comes from a CDN or a pre-built bundle.
 * @ignore
 */
export function minimumEngineVersion(): string {
	const range = peerDependencies.melonjs;
	// ">=20.11.0" or "^20.11.0" -> "20.11.0"
	return range.match(/\d+\.\d+\.\d+/)?.[0] ?? range;
}

/**
 * A sample melonJS plugin. Rename it and make it yours.
 * @example
 * import { plugin } from "melonjs";
 * import { MyPlugin } from "my-plugin";
 *
 * // once the application is created
 * plugin.register(MyPlugin, "myPlugin");
 * // then, anywhere
 * plugin.cache.myPlugin.hello();
 * @category Plugins
 */
export class MyPlugin extends plugin.BasePlugin {
	/**
	 * @param [app] - the application this plugin belongs to, the running one
	 * by default. Pass it on a page with several applications:
	 * `plugin.register(MyPlugin, "myPlugin", app)`, as `plugin.register`
	 * forwards its extra arguments to the constructor.
	 */
	constructor(app?: Application) {
		super(app);

		// the minimum melonJS version expected to run this plugin
		this.version = minimumEngineVersion();

		console.log(`${name} ${version} | ${homepage}`);
	}

	/**
	 * Add your own methods; this one says hello.
	 * @returns the size of the application's viewport
	 */
	hello(): string {
		const { width, height } = this.app.viewport;
		return `hello from a ${width}x${height} viewport`;
	}
}
