/// <reference path="./common.d.ts" />

type GlobalContext = {
  theme: string;
  setTheme: Function;
};

declare module "*.mp3" {
  const src: string;
  export default src;
}
