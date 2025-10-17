import { g as globalScripts, b as bootstrapLazy } from './index-DF10yY81.js';
export { s as setNonce } from './index-DF10yY81.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["ds-button",[[257,"ds-button",{"variant":[1],"size":[1],"disabled":[4],"type":[1]}]]]], options);
};

export { defineCustomElements };
//# sourceMappingURL=loader.js.map
