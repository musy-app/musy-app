import { DefaultTheme } from "styled-components/native";

import { Theme } from "../types/theme";

import light from "./light";
import main from "./main";

const complete = (theme: Theme): DefaultTheme => {
  return { ...main, ...theme };
};

const themes = { light: complete(light) };

export default themes;
