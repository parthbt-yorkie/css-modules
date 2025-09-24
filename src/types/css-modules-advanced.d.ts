// Advanced CSS Modules type definitions with better IntelliSense
declare module "*.module.css" {
  const classes: {
    readonly [key: string]: string;
  };
  export default classes;
}

declare module "*.module.scss" {
  const classes: {
    readonly [key: string]: string;
  };
  export default classes;
}

declare module "*.module.sass" {
  const classes: {
    readonly [key: string]: string;
  };
  export default classes;
}

declare module "*.module.less" {
  const classes: {
    readonly [key: string]: string;
  };
  export default classes;
}

declare module "*.module.styl" {
  const classes: {
    readonly [key: string]: string;
  };
  export default classes;
}

// Global CSS files (non-modules)
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.sass" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.less" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.styl" {
  const content: { [className: string]: string };
  export default content;
}
