let __fetch: null | typeof window.fetch = null;

(() => {
  if (__fetch) {
    return;
  }

  if (typeof window !== 'undefined' && window.fetch) {
    __fetch = window.fetch;
    return;
  }

  // eslint-disable-next-line unicorn/prefer-module, @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports
  __fetch = require('node-fetch') as typeof window.fetch;
})();

export const fetch = __fetch;
