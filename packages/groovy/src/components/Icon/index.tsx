import React from "react";
import { useTheme } from "styled-components";

import groovy from "../..";
import { GroovyComponent } from "../../types";
import { Size, TextColors } from "../../types/theme";

type Props = {
  icon: SVGElement;
  size?: keyof Size | number | string;
  /**
   * The text color. Strictly limited to colors of our design system. If you want to pass accent color make sure to pass `accent` instead of `color`.
   */
  color?: keyof TextColors;
  align?: "top" | "middle" | "bottom";
};

export type IconProps = GroovyComponent<
  Props,
  React.SVGAttributes<SVGSVGElement>
>;

const Icon: React.FC<IconProps> = groovy(
  ({ as: Component = "svg", size, ...props }: IconProps) => {
    const theme = useTheme();
    return (
      <Component
        size={theme.size[size as keyof Size] || size || theme.size.normal}
        height={theme.size[size as keyof Size] || size || theme.size.normal}
        width={theme.size[size as keyof Size] || size || theme.size.normal}
        {...props}
      />
    );
  }
)<IconProps>`
  color: ${(props) =>
    props.theme.colors.text[props.color as keyof TextColors] ||
    props.color ||
    props.theme.colors.text.primary};
  vertical-align: ${({ align }) => {
    switch (align) {
      case "top":
        return "text-top";
      case "middle":
        return "middle";
      case "bottom":
        return "text-bottom";
      default:
        return "middle";
    }
  }};
`;

export default Icon;
