// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type GroovyComponent<P, N = React.HTMLAttributes<any>> = {
  /**
   * The root element.
   */
  as?: React.ElementType;
  /**
   * The content, duh.
   */
  children?: React.ReactNode;
} & P &
  Omit<N, keyof P>;

export type NormalSizes = "small" | "normal" | "large";
