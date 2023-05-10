import React from "react";
import { DefaultTheme, ThemeProvider } from "styled-components/native";

import themes from "../../themes";

export type NativeGroovyProviderProps = {
  children?: React.ReactNode;
  theme?: DefaultTheme;
};

const NativeGroovyProvider: React.FC<NativeGroovyProviderProps> = ({
  children,
  theme = themes.light,
}: NativeGroovyProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default NativeGroovyProvider;
