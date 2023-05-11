import { MainTheme } from "../types/theme";

const main: MainTheme = {
  family: {
    primary: "Poppins, -apple-system, sans-serif",
    monospace: "dm-mono",
  },
  weight: {
    thin: 100,
    extraLight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900,
  },
  size: {
    extraTitle: "40px",
    title: "32px",
    large: "25px",
    medium: "20px",
    normal: "15px",
    small: "15px",
    tiny: "12px",

    desktop: {
      extraTitle: "60px",
      title: "48px",
      large: "40px",
      medium: "35px",
      normal: "20px",
      small: "15px",
      tiny: "12px",
    },

    button: {
      xs: "10px",
      sm: "12px",
      md: "14px",
      lg: "16px",
    },
  },
  breakpoint: {
    /* Desktops and laptops */
    desktop: "1824px",
    /* iPads (landscape) */
    laptop: "1224px",
    /* iPads (portrait) */
    tablet: "1024px",
    /* Smartphones (landscape) */
    mobile: "768px",
  },
  gap: {
    tiny: "5px",
    small: "10px",
    normal: "15px",
    medium: "20px",
    large: "30px",
    extraLarge: "60px",
  },
  radius: {
    square: "8px",
    round: "99999px",
  },
};

export default main;
