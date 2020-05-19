import React from "react";
import { Animated } from "react-native";
import styled from "styled-components";
import { handleSpacing } from "../utils/index";

const Block = styled.View`
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
  ${({ round, theme }) => round && `border-radius: ${theme.typo.radius}px;`}
  ${({ borderWidth }) => borderWidth && `border-width: ${borderWidth}px;`}
  ${({ borderColor }) => borderColor && `border-color: ${borderColor};`}
  ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius}px`}
  ${({ bg, theme }) =>
    theme.colors[bg]
      ? `background-color: ${theme.colors[bg]}`
      : `background-color: ${bg}`}
  ${({ row }) => row && "flex-direction: row;"}
  ${({ column }) => column && "flex-direction: column;"}
  ${({ center }) => center && "justify-content: center;"}
  ${({ middle }) => middle && "align-items: center;"}
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent}`}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
  ${({ alignSelf }) => alignSelf && `align-self: ${alignSelf};`}
  ${({ opacity }) => opacity && `opacity: ${opacity};`}
  ${({ shadow, theme }) =>
    shadow &&
    `
    box-shadow: 0px 5px 5px ${theme.colors.black};
    elevation: 2;
  `}
  ${({ style }) => style && { ...style }}
`;

export default ({ animated, children, ...props }) => {
  if (animated) {
    <Animated.View>
      <Block {...props}>{children}</Block>
    </Animated.View>;
  }
  return <Block {...props}>{children}</Block>;
};
