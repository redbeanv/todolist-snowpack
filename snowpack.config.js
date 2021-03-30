// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration
// https://github.com/snowpackjs/snowpack/blob/main/docs/reference/configuration.md

// snowpack init

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /**
     * 방식:  [path: string]: string | {url: string, resolve: boolean, static: boolean}
     * 예:    public: '/' | {url: '/', resolve: true, static: false}
     *
     * url: source path와 마운a트 할 url
     * resolve:
     * static: true면 빌드 하지 않음
     * */
    public: {url: '/', static: true},
    src: {url: '/dist'},
  },
  plugins: [
    '@snowpack/plugin-sass'
    // https://www.npmjs.com/package/@snowpack/plugin-sass
    // , {
    //  /* see options below */
    // }
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};