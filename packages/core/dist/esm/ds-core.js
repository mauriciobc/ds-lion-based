import { p as promiseResolve, g as globalScripts, b as bootstrapLazy } from './index-DF10yY81.js';
export { s as setNonce } from './index-DF10yY81.js';

/*
 Stencil Client Patch Browser v4.38.1 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["ds-button",[[257,"ds-button",{"variant":[1],"size":[1],"disabled":[4],"type":[1]}]]]], options);
});
//# sourceMappingURL=ds-core.js.map
