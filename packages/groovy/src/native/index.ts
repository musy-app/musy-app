import groovy from "styled-components/native";

import NativeGroovyProvider from "./components/Provider";
import Text from "./components/Text";

import "./types/styled-components";

// eslint-disable-next-line @typescript-eslint/no-var-requires
export const ReactNative = require("react-native") as Awaited<
  typeof import("react-native")
>;

export { NativeGroovyProvider, Text };

export default groovy;
