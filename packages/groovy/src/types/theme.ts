export type Theme = {
  id: number;
  colors: Colors;
};

export type MainTheme = {
  breakpoint: Breakpoint;
  family: {
    primary: string;
    monospace: string;
  };
  gap: Gap;
  size: Size & {
    desktop?: Size;

    // - Elements
    button: ButtonSize;
  };
  weight: Weight;
  radius: Radius;
};

export type Colors = {
  primary: string;
  secondary: string;
  tertiary: string;

  background: BackgroundColors;

  text: TextColors;

  danger: string;
  warning: string;
  success: string;
  info: string;

  // - Fixed
  white: string;
  black: string;
};

/**
 * Background colors are used for backgrounds.
 */
export type BackgroundColors = {
  primary: string;
  secondary: string;
  tertiary: string;
  contrast: string;
};

/**
 * Text colors are used for text.
 */
export type TextColors = {
  primary: string;
  secondary: string;
  tertiary: string;
  contrast: string;
};

/**
 * Weight is used for font weights.
 */
export type Weight = {
  thin: number;
  extraLight: number;
  light: number;
  regular: number;
  medium: number;
  semiBold: number;
  bold: number;
  extraBold: number;
  black: number;
};

/**
 * Size is used for font sizes.
 */
export type Size = {
  extraTitle: string;
  title: string;
  large: string;
  medium: string;
  normal: string;
  small: string;
  tiny: string;
};

/**
 * ButtonSize is used for button sizes.
 */
export type ButtonSize = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
};

/**
 * Breakpoint is used for media queries.
 */
export type Breakpoint = {
  /**
   * Desktops and laptops
   */
  desktop: string;
  /**
   * iPads (landscape)
   */
  laptop: string;
  /**
   * iPads (portrait)
   */
  tablet: string;
  /**
   * Smartphones (landscape)
   */
  mobile: string;
};

/**
 * Gap is used for spacing.
 */
export type Gap = {
  extraLarge: string;
  large: string;
  medium: string;
  normal: string;
  small: string;
  tiny: string;
};

/**
 * Radius is used for border radius.
 */
export type Radius = {
  square: string;
  round: string;
};
