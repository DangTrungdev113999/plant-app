import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components";

import theme from "./src/config/theme";

import Block from "./src/components/Block";
import Button from "./src/components/Button";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Block block center middle>
        <Block w={50} h={50} bgColor="primary" shadow card />
        <Block w={50} h={50} bgColor="tomato" m={[10, 20, 30, 40]} />
        {/* <Button>
          <Tex>button</Tex>
        </Button> */}
      </Block>
    </ThemeProvider>
  );
}
