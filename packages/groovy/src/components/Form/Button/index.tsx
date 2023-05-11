/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  cloneElement,
  isValidElement,
  JSXElementConstructor,
  ReactElement,
} from "react";
import { useTheme } from "styled-components";

import groovy, { convertRGBtoRGBA, HashSpinner } from "../../..";
import { GroovyComponent } from "../../../types";

type Props = {
  /**
   * The button's classname.
   */
  className?: string;

  /**
   * The visual color appearance of the button.
   */
  type?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "white"
    | "black"
    | "contrast";

  /**
   * The button's disabled status.
   *
   * If `true`, the button will be disabled.
   */
  disabled?: boolean;

  /**
   * The button's active status.
   *
   * If `true`, the button will be styled in its active state.
   */
  active?: boolean;

  /**
   * The button's loading status.
   *
   * If `true`, the button will show a spinner.
   */
  loading?: boolean;

  /**
   * The label to show in the button when isLoading is `true` If no text is passed, it only shows the spinner.
   */
  loadingText?: string;

  /**
   * If added, the button will show an icon before the button's label.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  leftIcon?: ReactElement<any, string | JSXElementConstructor<any>> | string;

  /**
   * If added, the button will show an icon after the button's label.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rightIcon?: ReactElement<any, string | JSXElementConstructor<any>> | string;

  /**
   * The visual color appearance of the button.
   */
  variant?: "ghost" | "outline" | "solid" | "link" | "unstyled";

  /**
   * The size of the button.
   */
  size?: "xs" | "sm" | "md" | "lg";

  /**
   * The shape of the button.
   */
  shape?: "rounded" | "pill";

  /**
   * The spinner to show when `loading` is `true`.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  spinner?: ReactElement<any, string | JSXElementConstructor<any>>;

  /**
   * It determinates the placement of the spinner when `loading` is `true` and `loadingText` is passed.
   */
  spinnerPlacement?: "left" | "right";
};

export type ButtonProps = GroovyComponent<
  Props,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>;

const Button = groovy(
  ({
    as: Component = "button",
    type = "primary",
    disabled = false,
    active = false,
    loading = false,
    loadingText,
    leftIcon,
    rightIcon,
    variant = "solid",
    size = "md",
    shape = "pill",
    spinner = <HashSpinner />,
    spinnerPlacement = "left",
    children,
    ...props
  }: ButtonProps) => {
    const theme = useTheme();

    const contentProps = { leftIcon, rightIcon, children };

    // - add props to spinner
    if (spinner) {
      let spinnerColor = theme.colors.text.contrast;

      if (type === "contrast") spinnerColor = theme.colors.text.primary;

      spinner = React.cloneElement(spinner, {
        color: spinnerColor,
      });
    }

    return (
      <Component {...props}>
        {loading && spinnerPlacement === "left" && (
          <ButtonSpinner placement={"left"}>{spinner}</ButtonSpinner>
        )}

        {loading && loadingText ? (
          loadingText
        ) : (
          <ButtonContent {...contentProps} />
        )}

        {loading && spinnerPlacement === "right" && (
          <ButtonSpinner placement={"right"}>{spinner}</ButtonSpinner>
        )}
      </Component>
    );
  }
)<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  outline: none;
  line-height: 1;

  border: none;
  border-radius: ${({ shape = "pill" }) => `
    ${
      {
        rounded: "10px",
        pill: "9999px",
      }[shape]
    }
  `};
  gap: 10px;

  font-weight: ${({ theme }) => theme.weight.semiBold};

  cursor: pointer;
  user-select: none;

  transition: all 0.2s;

  ${({ theme, type, variant, size = "md" }) => {
    // - Appearance

    let backgroundColor = theme.colors.primary;
    let color = theme.colors.text.contrast;
    let borderColor = "";

    if (type) {
      switch (type) {
        case "secondary":
          backgroundColor = theme.colors.secondary;
          color = theme.colors.text.contrast;
          break;
        case "contrast":
          backgroundColor = theme.colors.background.primary;
          color = theme.colors.text.primary;
          break;
        case "white":
          backgroundColor = theme.colors.white;
          color = theme.colors.black;
          break;
        case "black":
          backgroundColor = theme.colors.black;
          color = theme.colors.white;
          break;
        case "danger":
        case "success":
        case "warning":
          backgroundColor = theme.colors[type];
          color = theme.colors.text.contrast;
          break;
      }
    }

    if (variant) {
      switch (variant) {
        case "outline":
          color = backgroundColor;
          borderColor = backgroundColor;
          backgroundColor = "transparent";
          break;
        case "ghost":
          color = backgroundColor;
          backgroundColor = "transparent";
          break;
        case "link":
          color = backgroundColor;
          backgroundColor = "transparent";
      }
    }

    return `
      background-color: ${backgroundColor};
      color: ${color};
      ${borderColor && `border: 1px solid ${borderColor}`};
      font-size: ${
        {
          xs: theme.size.button.xs,
          sm: theme.size.button.sm,
          md: theme.size.button.md,
          lg: theme.size.button.lg,
        }[size]
      };
      ${
        variant !== "link"
          ? `padding: ${
              {
                xs: "10px 13px",
                sm: "12px 18px",
                md: "15px 20px",
                lg: "18px 23px",
              }[size]
            };`
          : `margin: ${
              {
                xs: "10px 13px",
                sm: "12px 18px",
                md: "15px 20px",
                lg: "18px 23px",
              }[size]
            };
      
      &:hover {
        ${
          {
            link: `
              text-decoration: underline;
              border-radius: 0;  
            `,
            ghost: `
              background-color: ${convertRGBtoRGBA(color, 0.9)};
            `,
            outline: `
              background-color: ${convertRGBtoRGBA(color, 0.9)};
            `,
          }[variant]
        }
      }
      `
      }
    `;
  }}

  ${({ loading, disabled, active }) => {
    // - Comportement

    return `
      filter: ${active ? "brightness(0.8)" : "brightness(1)"};
      opacity: ${disabled || loading ? 0.7 : 1};
      cursor: ${disabled || loading ? "not-allowed" : "pointer"};
      pointer-events: ${disabled || loading ? "none" : "auto"};
    `;
  }}

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    filter: brightness(0.8);
  }
`;

type ButtonContentProps = Pick<
  ButtonProps,
  "leftIcon" | "rightIcon" | "children"
>;

const ButtonContent = ({
  leftIcon,
  rightIcon,
  children,
}: ButtonContentProps) => {
  return (
    <>
      {leftIcon && <ButtonIcon>{leftIcon}</ButtonIcon>}
      {children}
      {rightIcon && <ButtonIcon>{rightIcon}</ButtonIcon>}
    </>
  );
};

type ButtonIconProps = GroovyComponent<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >
>;

const ButtonIcon = groovy(
  ({ as: Component = "span", children, ...props }: ButtonIconProps) => {
    const _children = isValidElement(children)
      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
        cloneElement<any>(children, {
          "aria-hidden": true,
          focusable: false,
        })
      : children;

    return <Component {...props}>{_children}</Component>;
  }
)`
  display: inline-flex;
  align-self: center;
  flex-shrink: 0;
  font-size: inherit;
`;

const ButtonSpinner = groovy.div<{ placement: "left" | "right" }>`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Button;
