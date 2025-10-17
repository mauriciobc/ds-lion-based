'use strict';

var index = require('./index-Dyv9X0GX.js');

var _documentCurrentScript = typeof document !== 'undefined' ? document.currentScript : null;
/*
 Stencil Client Patch Browser v4.38.1 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  const importMeta = (typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : (_documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === 'SCRIPT' && _documentCurrentScript.src || new URL('ds-core.cjs.js', document.baseURI).href));
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return index.promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await index.globalScripts();
  return index.bootstrapLazy([["ds-button.cjs",[[257,"ds-button",{"variant":[1],"size":[1],"disabled":[4],"type":[1]}]]]], options);
});

exports.setNonce = index.setNonce;
//# sourceMappingURL=ds-core.cjs.js.map
