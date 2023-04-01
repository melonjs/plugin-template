import replace from "@rollup/plugin-replace";
import bundleSize from "rollup-plugin-bundle-size";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import pkg from "./package.json" assert { type: "json" };

// credit/license information
const license = [
    "/*!",
    " * " + pkg.description,
    " * " + pkg.name + " - v" + pkg.version,
    " * " + pkg.name + " is licensed under the MIT License.",
    " * http://www.opensource.org/licenses/mit-license",
    " * @copyright (C) 2011 - " + (new Date()).getFullYear() + " " + pkg.author,
    " */"
].join("\n");

export default [{
    input: "src/index.js",
    plugins: [
        resolve({
            mainFields: ["module"],
            browser: true,
            preferBuiltins: false
        }),
        commonjs({
            include: "node_modules/**",
            sourceMap: false
        }),
        replace({
            values: {
                __VERSION__: pkg.version
            },
            preventAssignment: true
        }),
        bundleSize()
    ],
    output: {
        file: "dist/" + pkg.name + ".js",
        banner: license,
        freeze: false,
        format: "es"
    },
    external: ["melonjs"],
    treeshake: false
}];
