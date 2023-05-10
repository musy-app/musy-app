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
  },
};

export default light;
