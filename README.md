# melonJS Plugin Template
![melonJS Logo](https://github.com/melonjs/melonJS/raw/master/media/Banner/Banner%20-%20Billboard%20-%20Original%20Logo%20-%20horizontal.png)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A starter template for creating [melonJS](https://github.com/melonjs/melonJS) plugins, built with esbuild and TypeScript.

## Getting Started

1. Clone or fork this repository
2. Install dependencies:

       npm install

3. Update `package.json` with your plugin name and description
4. Implement your plugin in [`src/index.js`](src/index.js)

## Build

    npm run build

The generated files will be in the `dist/` directory:
- `index.js` — ES module bundle
- `index.d.ts` — TypeScript declarations

## Publishing

Update the `name`, `description`, and `version` fields in `package.json`, then:

    npm publish

## Plugin Structure

```
src/
└── index.js       # your plugin entry point
scripts/
└── build.ts       # esbuild configuration
dist/              # generated output (gitignored)
```

The template extends `plugin.BasePlugin` from melonJS. See the [plugin API docs](https://melonjs.github.io/melonJS/) for available hooks and methods.

## Need Help?

- [Discord](https://discord.gg/aur7JMk) — chat with the community
- [Forum](https://melonjs.discourse.group) — ask questions
- [API Docs](https://melonjs.github.io/melonJS/) — full API reference
- [Wiki](https://github.com/melonjs/melonJS/wiki) — tutorials and guides
