import React from "react";
import { ThemeProvider } from "styled-components";

import Navigation from "@navigation";
import theme from "@config/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
}
