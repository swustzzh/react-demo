/// <reference types="react-scripts" />

// Cannot find module '*.module.less' or its corresponding type declarations.
declare module '*.module.less' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module 'worker-loader!*' {
  class WebpackWorker extends Worker {
    constructor();
  }

  export = WebpackWorker;
}
