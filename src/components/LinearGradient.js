import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components";

import { handleSpacing } from "../utils/index";
import theme from "../config/theme";

const LinearGradientStyled = styled(LinearGradient)`
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
  ${({ row }) => row && `flex-direction: ${row};`}
  ${({ column }) => column && `flex-direction: ${column};`}
  ${({ center }) => center && "justify-content: center;"}
  ${({ middle }) => middle && "align-items: center;"}
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent}`}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
  ${({ alignSelf }) => alignSelf && `align-self: ${alignSelf};`}
  ${({ style }) => style && { ...style }}
`;

export default ({
  colors,
  start = { x: 0, y: 0 },
  end = { x: 1, y: 1 },
  locations = [0.1, 0.9],
  children,
  ...props
}) => {
  return (
    <LinearGradientStyled
      start={start}
      end={end}
      locations={locations}
      colors={colors || [theme.colors.primary, theme.colors.secondary]}
      {...props}
    >
      {children}
    </LinearGradientStyled>
  );
};
