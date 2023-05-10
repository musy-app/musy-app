import React from "react";
import { DefaultTheme } from "styled-components";

import { ThemeProvider } from "../../contexts/Theme";
import GlobalStyle from "../GlobalStyle";

export type GroovyProviderProps = {
  children?: React.ReactNode;
  theme?: DefaultTheme;
};

const GroovyProvider: React.FC<GroovyProviderProps> = ({
  children,
  theme,
}: GroovyProviderProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default GroovyProvider;
