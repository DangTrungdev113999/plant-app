import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "./src/config/theme";

import Block from "./src/components/Block";
import Button from "./src/components/Button";
import Text from "./src/components/Text";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Block block center middle>
        <Button gradient p={20} round>
          <Text color="#fff">button</Text>
        </Button>
      </Block>
    </ThemeProvider>
  );
}
