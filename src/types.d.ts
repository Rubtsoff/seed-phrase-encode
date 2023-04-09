// Styles
declare module "*.css" {
  const styles: { readonly [key: string]: string };
  export default styles;
}

declare module "*.scss" {
  const styles: { readonly [key: string]: string };
  export default styles;
}

// Images
declare module "*.svg" {
  const value: any;
  export default value;
}
declare module "*.jpg";
declare module "*.png";
declare module "*.jpeg";
declare module "*.gif";
