/// <reference types="vite/client" />

// types/remoteVueComponents.d.ts
declare module "remoteVueComponents/Button" {
  import { DefineComponent } from "vue";
  const Button: DefineComponent<{}, {}, any>;
  export default Button;
}

// types/remoteReactComponents.d.ts
declare module "remoteReactComponents/Button" {
  import { DefineComponent } from "vue";
  const Button: DefineComponent<{}, {}, any>;
  export default Button;
}
