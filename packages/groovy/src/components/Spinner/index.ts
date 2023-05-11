export type SpinnerProps = {
  /**
   * The spinner's className.
   */
  className?: string;

  /**
   * The spinner's speed multiplicator.
   *
   * @default 1
   */
  speed?: number;

  /**
   * The spinner's size.
   *
   * @default 16
   */
  size?: number;

  /**
   * The spinner's color.
   *
   * @default `theme.colors.background.contrast`
   */
  color?: string;
};

export const createAnimation = (
  loaderName: string,
  frames: string,
  suffix: string
): string => {
  const animationName = `${loaderName}-${suffix}`;

  if (typeof window == "undefined" || !window.document) {
    return animationName;
  }

  const styleEl = document.createElement("style");
  document.head.appendChild(styleEl);
  const styleSheet = styleEl.sheet;

  const keyFrames = `
    @keyframes ${animationName} {
      ${frames}
    }
  `;

  if (styleSheet) {
    styleSheet.insertRule(keyFrames, 0);
  }

  return animationName;
};
