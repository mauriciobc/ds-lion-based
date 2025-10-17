'use strict';

var index = require('./index-Dyv9X0GX.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await index.globalScripts();
  return index.bootstrapLazy([["ds-button.cjs",[[257,"ds-button",{"variant":[1],"size":[1],"disabled":[4],"type":[1]}]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;
//# sourceMappingURL=loader.cjs.js.map
