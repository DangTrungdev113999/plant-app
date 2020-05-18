import React from "react";
import styled from "styled-components";
import { StyleSheet } from "react-native";
import Block from "./Block";
import Button from "./Button";
import Icon from "./Icon";

const TextInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.black,
  underlineColorAndroid: "transparent",
}))`
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.typo.radius}px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary}; 
  height: ${({ theme }) => theme.typo.base * 3}px; 
  font-size: ${({ theme }) => theme.typo.font}px;
  padding-horizontal: 10px;
  ${({ block }) => block && "flex: 1;"}
  ${({ flex }) => flex && `flex: ${flex};`}
  ${({ size }) => size && `font-size: ${size}px;`}
  ${({ w }) => w && `width: ${w}px;`}
  ${({ h }) => h && `height: ${h}px;`}
  ${({ m }) => m && `margin: ${m}px;`}
  ${({ mt }) => mt && `margin-top: ${mt}px;`}
  ${({ mb }) => mb && `margin-bottom: ${mb}px;`}
  ${({ ml }) => ml && `margin-left: ${ml}px;`}
  ${({ mr }) => mr && `margin-right: ${mr}px;`}
  ${({ mv }) => mv && `margin-vertical: ${mv}px;`}
  ${({ mh }) => mh && `margin-horizontal: ${mh}px;`}
  ${({ p }) => p && `padding: ${p}px;`}
  ${({ pt }) => pt && `padding-top: ${pt}px;`}
  ${({ pb }) => pb && `padding-bottop: ${pb}px;`}
  ${({ pl }) => pl && `padding-left: ${pl}px;`}
  ${({ pr }) => pr && `padding-right: ${pr}px;`}
  ${({ pv }) => pv && `padding-vertical: ${pv}px;`}
  ${({ ph }) => ph && `padding-horizontal: ${ph}px;`}
  ${({ absolute }) => absolute && "position: absolute;"}
  ${({ top }) => top && `top: ${top}px;`}
  ${({ bottom }) => bottom && `bottom: ${bottom}px;`}
  ${({ right }) => right && `right: ${right}px;`}
  ${({ left }) => left && `right: ${left}px;`}
  ${({ color, theme }) =>
    theme.colors[color] ? `color: ${theme.colors[color]}` : `color: ${color}`}
      ${({ weight }) => weight && `font-weight: ${weight};`}
  ${({ borderWidth }) => borderWidth && `border-width: ${borderWidth}px;`}
  ${({ borderColor }) => borderColor && `border-color: ${borderColor};`}
  ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius}px`}
  ${({ style }) => style && { ...style }}
`;

const Input = ({
  email,
  phone,
  number,
  onTextChange,
  value,
  color,
  editable = true,
  rightIcon,
  onPressRightIcon,
  style,
  ...rest
}) => {
  const inputType = email
    ? "email-address"
    : number
    ? "numeric"
    : phone
    ? "phone-pad"
    : "default";

  const renderIconRight = () => {
    return (
      <Button absolute right={10} top={12} onPress={onPressRightIcon}>
        {rightIcon}
      </Button>
    );
  };
  return (
    <Block>
      <TextInput
        onChangeText={onTextChange}
        editable={editable}
        keyboardType={inputType}
        value={value}
        style={style}
        {...rest}
      />
      {renderIconRight()}
    </Block>
  );
};

export default Input;
