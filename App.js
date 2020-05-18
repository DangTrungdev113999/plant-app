import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "./src/config/theme";
import Block from "./src/components/Block";
import Input from "./src/components/Input";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Block block center middle>
        <Input w={300} placeholder="nam quoc son ha nam de cu" email />
      </Block>
    </ThemeProvider>
  );
}
