import React from "react";
import { useTheme } from "styled-components";

import groovy, { convertRGBtoRGBA } from "../../..";
import { GroovyComponent } from "../../../types";
import { cssValue, parseLengthAndUnit } from "../../../utils/unit-converter";
import { createAnimation, SpinnerProps } from "..";

type Props = object;

export type HashSpinnerProps = GroovyComponent<Props, SpinnerProps>;

const Spinner: React.FC<HashSpinnerProps> = groovy(
  ({ color, speed = 1, size = 15, ...props }: HashSpinnerProps) => {
    const theme = useTheme();

    const { value, unit } = parseLengthAndUnit(size);

    const wrapper: React.CSSProperties = {
      display: "inherit",
      position: "relative",
      width: cssValue(size),
      height: cssValue(size),
      transform: "rotate(165deg)",
    };

    const thickness = value / 5;

    const lat = (value - thickness) / 2;

    const offset = lat - thickness;

    const colorValue = convertRGBtoRGBA(theme.colors.text.contrast, 0.75);

    const before = createAnimation(
      "HashSpinner",
      `0% {width: ${thickness}px; box-shadow: ${lat}px ${-offset}px ${colorValue}, ${-lat}px ${offset}px ${colorValue}}
    35% {width: ${cssValue(
      size
    )}; box-shadow: 0 ${-offset}px ${colorValue}, 0 ${offset}px ${colorValue}}
    70% {width: ${thickness}px; box-shadow: ${-lat}px ${-offset}px ${colorValue}, ${lat}px ${offset}px ${colorValue}}
    100% {box-shadow: ${lat}px ${-offset}px ${colorValue}, ${-lat}px ${offset}px ${colorValue}}`,
      "before"
    );

    const after = createAnimation(
      "HashSpinner",
      `0% {height: ${thickness}px; box-shadow: ${offset}px ${lat}px ${color}, ${-offset}px ${-lat}px ${color}}
    35% {height: ${cssValue(
      size
    )}; box-shadow: ${offset}px 0 ${color}, ${-offset}px 0 ${color}}
    70% {height: ${thickness}px; box-shadow: ${offset}px ${-lat}px ${color}, ${-offset}px ${lat}px ${color}}
    100% {box-shadow: ${offset}px ${lat}px ${color}, ${-offset}px ${-lat}px ${color}}`,
      "after"
    );

    const style = (i: number): React.CSSProperties => {
      return {
        position: "absolute",
        top: "50%",
        left: "50%",
        display: "block",
        width: `${value / 5}${unit}`,
        height: `${value / 5}${unit}`,
        borderRadius: `${value / 10}${unit}`,
        transform: "translate(-50%, -50%)",
        animationFillMode: "none",
        animation: `${i === 1 ? before : after} ${2 / speed}s infinite`,
      };
    };

    return (
      <span style={wrapper} {...props}>
        <span style={style(1)} />
        <span style={style(2)} />
      </span>
    );
  }
)``;

export default Spinner;
