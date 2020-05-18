/* eslint-disable curly */
/* eslint-disable quotes */
import styled from "styled-components";
import { handleSpacing } from "../utils/index";

const Text = styled.Text`
  font-size: ${({ theme }) => theme.typo.font}px;
  ${({ thin }) => thin && "font-weight: 100;"}
  ${({ light }) => light && "font-weight: 300;"}
  ${({ semibold }) => semibold && "font-weight: 500;"}
  ${({ bold }) => bold && "font-weight: 700;"}
  ${({ extraBold }) => extraBold && "font-weight: 900;"}
  ${({ weight }) => weight && `font-weight: ${weight};`}
  ${({ m }) => m && `margin: ${handleSpacing(m)}px;`}
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
  ${({ size }) => size && `font-size: ${size}px;`}
  ${({ color, theme }) =>
    theme.colors[color] ? `color: ${theme.colors[color]}` : `color: ${color}`}
  ${({ italic }) => italic && "font-style: italic;"}
  ${({ h1, theme }) =>
    h1 &&
    `
    font-size: ${theme.typo.h1.size}px;
  `}
  ${({ h2, theme }) =>
    h2 &&
    `
    font-size: ${theme.typo.h1.size}px;
  `}
  ${({ h3, theme }) =>
    h3 &&
    `
    font-size: 32px;
  `}
  ${({ p, theme }) =>
    p &&
    `
    font-size: ${theme.typo.p}px;
  `}
  ${({ body, theme }) =>
    body &&
    `
    font-size: ${theme.typo.body}px;
  `}
  ${({ caption, theme }) =>
    caption &&
    `
    font-size: ${theme.typo.caption}px;
  `}
  ${({ center }) =>
    center &&
    `
    text-align: center;
  `}
  ${({ right }) =>
    right &&
    `
    align-self: flex-start;
    text-align: right;
  `}
  ${({ left }) =>
    left &&
    `
    align-self: flex-end;   
    text-align:  left;
  `}
  
`;

export default Text;
