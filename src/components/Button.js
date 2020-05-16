import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components";

import { handleSpacing } from "../utils/index";
import theme from "../config/theme";

const TouchableOpacity = styled.TouchableOpacity`
  ${({ block }) => block && "flex: 1;"}
  ${({ flex }) => flex && `flex: ${flex};`}
  ${({ w }) => w && `width: ${w}px;`}
  ${({ h }) => h && `height: ${h}px;`}
  ${({ m }) => m && `margin: ${handleSpacing(m)};`}
  ${({ mt }) => mt && `margin-top: ${mt}px;`}
  ${({ mb }) => mb && `margin-bottom: ${mb}px;`}
  ${({ ml }) => ml && `margin-left: ${ml}px;`}
  ${({ mr }) => mr && `margin-right: ${mr}px;`}
  ${({ mv }) => mv && `margin-vertical: ${mv}px;`}
  ${({ mh }) => mh && `margin-horizontal: ${mh}px;`}
  ${({ p }) => p && `padding: ${handleSpacing(p)}px;`}
  ${({ pt }) => pt && `padding-top: ${pt}px;`}
  ${({ pb }) => pb && `padding-bottop: ${pb}px;`}
  ${({ pl }) => pl && `padding-left: ${pl}px;`}
  ${({ pr }) => pr && `padding-right: ${pr}px;`}
  ${({ pv }) => pv && `padding-vertical: ${pv}px;`}
  ${({ ph }) => ph && `padding-horizontal: ${ph}px;`}
  ${({ absolute }) => absolute && "position: absolute;"}
  ${({ relative }) => relative && "position: relative;"}
  ${({ top }) => top && `top: ${top}px;`}
  ${({ bottom }) => bottom && `bottom: ${bottom}px;`}
  ${({ right }) => right && `right: ${right}px;`}
  ${({ left }) => left && `right: ${left}px;`}
  ${({ border, theme }) =>
    border &&
    `
    border-width: 1px;
    border-color: ${theme.colors.gray};
  `}
  ${({ card, theme }) => card && `border-radius: ${theme.typo.radius}px;`}
  ${({ borderWidth }) => borderWidth && `border-width: ${borderWidth}px;`}
  ${({ borderColor }) => borderColor && `border-color: ${borderColor};`}
  ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius}px`}
  ${({ bgColor, theme }) =>
    theme.colors[bgColor]
      ? `background-color: ${theme.colors[bgColor]}`
      : `background-color: ${bgColor}`}
  ${({ row }) => row && `flex-direction: ${row};`}
  ${({ column }) => column && `flex-direction: ${column};`}
  ${({ center }) => center && "justify-content: center;"}
  ${({ middle }) => middle && "align-items: center;"}
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent}`}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
  ${({ alignSelf }) => alignSelf && `align-self: ${alignSelf};`}
  ${({ shadow, theme }) =>
    shadow &&
    `
    box-shadow: 0px 5px 5px ${theme.colors.black};
    elevation: 2;
  `}
  ${({ style }) => style && { ...style }}
`;

Button.defaultProps = {
  startColor: theme.colors.primary,
  endColor: theme.colors.secondary,
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
  locations: [0.1, 0.9],
  opacity: 0.8,
  color: theme.colors.white,
};

const Button = ({
  style,
  opacity,
  gradient,
  color,
  startColor,
  endColor,
  end,
  start,
  locations,
  shadow,
  children,
  ...props
}) => {
  if (gradient) {
    return (
      <TouchableOpacity activeOpacity={opacity} {...props}>
        <LinearGradient
          start={start}
          end={end}
          locations={locations}
          colors={[startColor, endColor]}
        >
          {children}
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity activeOpacity={opacity || 0.8} {...props}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;
