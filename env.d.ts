/// <reference types="next" />
/// <reference types="next/image-types/global" />

// This tells TypeScript that .css files are okay to import
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}