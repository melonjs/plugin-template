import { plugin } from "melonjs";

/**
 * @classdesc
 * an emply plugin
 * @augments plugin.Base
 */
export class DebugPanelPlugin extends plugin.BasePlugin {
    constructor() {
        // call the super constructor
        super();

        // minimum melonJS version expected to run this plugin
        this.version = "15.2.0";
    }
}
