import { Theme } from "../types/theme";
import { createColor } from "../utils/createColor";

const light: Theme = {
  id: 1,
  colors: {
    primary: createColor(67, 44, 207),
    secondary: createColor(123, 107, 221),
    tertiary: "",

    background: {
      primary: createColor(255, 255, 255),
      secondary: createColor(255, 255, 255, 0.2),
      tertiary: "",
      contrast: "",
    },

    text: {
      primary: createColor(0, 0, 0),
      secondary: createColor(141, 149, 157),
      tertiary: "",
      contrast: createColor(255, 255, 255),
    },

    danger: createColor(255, 77, 77),
    warning: createColor(255, 175, 64),
    success: createColor(58, 227, 116),
    info: createColor(23, 192, 235),

    // - Fixed
    white: createColor(255, 255, 255),
    black: createColor(0, 0, 0),
  },
};

export default light;
