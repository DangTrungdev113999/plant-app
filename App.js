import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "./src/config/theme";

import Navigation from "./src/navigation/index";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
}
