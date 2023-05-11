# melonJS Plugin Template
![melonJS Logo](https://github.com/melonjs/melonJS/raw/master/media/Banner/Banner%20-%20Billboard%20-%20Original%20Logo%20-%20horizontal.png)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/melonjs/es6-boilerplate/blob/master/LICENSE)

a plugin project template for melonjs using rollup.

Usage
-------------------------------------------------------------------------------

Install all required dependencies :

    $ [sudo] npm install

Replace occurences of `plugin-template` to match with your plugin name in the [package.json](package.json) file

Start implementing your plugin using the provided [empty plugin](src/index.js) under `/src/index.js`

Build your plugin by running: 

    $ npm run build

The generated files will be available under the `dist` directory :
- `plugin-template.js` (as per the default name in the package.json)
- `index.d.ts` (typings for the plugin)

For more information about plugin and how to patch method, see our documentation [here](https://melonjs.github.io/melonJS/docs/melonjs/plugin.html).

Questions, need help ?
-------------------------------------------------------------------------------
If you need technical support, you can contact us through the following channels :
* Forums: with melonJS 2 we moved to a new discourse [forum](https://melonjs.discourse.group), but we can still also find the previous one [here](http://www.html5gamedevs.com/forum/32-melonjs/)
* Chat: come and chat with us on [discord](https://discord.gg/aur7JMk)
* we tried to keep our [wikipage](https://github.com/melonjs/melonJS/wiki) up-to-date with useful links, tutorials, and anything related melonJS.