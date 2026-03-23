import { plugin } from "melonjs";

/**
 * A sample melonJS plugin.
 * Rename this class and customize it for your needs.
 * @augments plugin.BasePlugin
 */
export class MyPlugin extends plugin.BasePlugin {
    constructor() {
        // call the super constructor
        super();

        // minimum melonJS version expected to run this plugin
        this.version = "18.0.0";
    }

    // add your plugin methods here
}
