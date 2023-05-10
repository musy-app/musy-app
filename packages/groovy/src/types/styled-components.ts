import { MainTheme, Theme } from "./theme";

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends Theme, MainTheme {}
}

export {};
