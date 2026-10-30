# melonJS Plugin Template
![melonJS Logo](https://github.com/melonjs/melonJS/raw/master/media/Banner/Banner%20-%20Billboard%20-%20Original%20Logo%20-%20horizontal.png)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A starter template for [melonJS](https://github.com/melonjs/melonJS) plugins, in TypeScript, built with esbuild and tested in a headless browser with Vitest.

## Getting Started

1. Use this template (or clone it)
2. Install the dependencies, and the browser the tests run in:

       npm install
       npx playwright install chromium

3. In `package.json`, set your plugin's `name`, `description`, `homepage` and `repository`, and the lowest melonJS version it needs in `peerDependencies`
4. Rename `MyPlugin` and write your plugin in [`src/index.ts`](src/index.ts)

## Using the plugin in a game

```ts
import { plugin } from "melonjs";
import { MyPlugin } from "my-plugin";

// once the application is created
plugin.register(MyPlugin, "myPlugin");

// then, anywhere
plugin.cache.myPlugin.hello();
```

`plugin.register` passes any extra arguments to the plugin's constructor. The template takes the application it belongs to, so on a page with several applications:

```ts
plugin.register(MyPlugin, "myPlugin", app);
```

## Scripts

| Script | What it does |
| --- | --- |
| `npm run build` | bundles `src/` into `dist/index.js` and writes the type declarations |
| `npm run dev` | the same, rebuilt on every change |
| `npm test` | runs the tests in `tests/` in headless Chromium |
| `npm run test:types` | type-checks the sources, tests and scripts |
| `npm run clean` | removes `dist/` |

`npm publish` cleans, builds and tests first.

## Plugin Structure

```
src/
└── index.ts        # the plugin
tests/
└── plugin.spec.ts  # its tests, run in a real browser
scripts/
├── build.ts        # esbuild configuration
└── clean.ts
dist/               # generated output (gitignored)
```

## Conventions

These are the ones the official plugins follow:

- **One version to maintain.** The lowest melonJS version the plugin runs on is read from `peerDependencies.melonjs`, and `plugin.register` refuses to run it on an older engine. The peer range alone only warns at install time, and never when melonJS comes from a CDN.
- **Use `this.app`**, not the global `game`: it is the application the plugin was registered for.
- **melonJS stays external.** The build leaves `melonjs` out of the bundle, so the game and the plugin share one engine.
- **Real browser tests.** melonJS needs a canvas and a DOM, so the tests create a real `Application` (`await app.init()`) in headless Chromium.

The official plugins in the [melonJS repository](https://github.com/melonjs/melonJS/tree/master/packages) (`debug-plugin`, `spine-plugin`, `capacitor-plugin`, `tiled-inflate-plugin`) are good examples to read.

## Need Help?

- [Discord](https://discord.gg/aur7JMk): chat with the community
- [Forum](https://melonjs.discourse.group): ask questions
- [API Docs](https://melonjs.github.io/melonJS/): full API reference
- [Wiki](https://github.com/melonjs/melonJS/wiki): tutorials and guides
