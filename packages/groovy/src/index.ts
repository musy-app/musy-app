/* eslint-disable simple-import-sort/imports */
// styled-components
import "./types/styled-components";
import { default as groovy } from "styled-components";
export type { DefaultTheme } from "styled-components";
export { createGlobalStyle } from "styled-components";

// ./themes
export { createTheme, default as themes } from "./themes";

// - Components

/// - Form
export type { ButtonProps } from "./components/Form/Button";
export { default as Button } from "./components/Form/Button";

/// - Feedback
export type { SpinnerProps } from "./components/Spinner";
export type { HashSpinnerProps } from "./components/Spinner/Hash";
export { default as HashSpinner } from "./components/Spinner/Hash";

/// -
export type { IconProps } from "./components/Icon";
export { default as Icon } from "./components/Icon";
export type { ImageProps } from "./components/Image";
export { default as Image } from "./components/Image";
export type { LinkProps } from "./components/Link";
export { default as Link } from "./components/Link";
export type { FragmentLinkProps } from "./components/Link/Fragment";
export { default as FragmentLink } from "./components/Link/Fragment";
export type { GroovyProviderProps } from "./components/Provider";
export { default as GroovyProvider } from "./components/Provider";

// ./hooks
export type { UseBreakpointResult } from "./hooks/useBreakpoint";
export { default as useBreakpoint } from "./hooks/useBreakpoint";
export type {
  UseClipboardOptions,
  UseClipboardResult,
} from "./hooks/useClipboard";
export { default as useClipboard } from "./hooks/useClipboard";
export type {
  KeyboardOptions,
  KeyboardResult,
  UseKeyboard,
  UseKeyboardHandler,
} from "./hooks/useKeyboard";
export { default as useKeyboard } from "./hooks/useKeyboard";
export type {
  UseLocalStorageOptions,
  UseLocalStorageParser,
  UseLocalStorageSerializer,
  UseLocalStorageSetter,
} from "./hooks/useLocalStorage";
export { default as useLocalStorage } from "./hooks/useLocalStorage";
export { default as useMediaQuery } from "./hooks/useMediaQuery";
export { default as usePortal } from "./hooks/usePortal";
export { default as usePrevious } from "./hooks/usePrevious";
export type { ReactiveDomReact } from "./hooks/useRect";
export {
  getEventRect,
  getRefRect,
  isUnplacedRect,
  default as useRect,
} from "./hooks/useRect";
export type { SSRState } from "./hooks/useSSR";
export { default as useSSR } from "./hooks/useSSR";
export { default as useTheme } from "./hooks/useTheme";
export { default as useThemeDetector } from "./hooks/useThemeDetector";
export { default as useWarning } from "./hooks/useWarning";

// .hoc
export type { ScaleProps } from "./hoc/withScale";
export { default as withScale } from "./hoc/withScale";

// ./utils
export { default as capitalize } from "./utils/capitalize";
export { KeyCode, KeyMod } from "./utils/codes";
export { default as convertRGBtoRGBA } from "./utils/convertRGBtoRGBA";
export { default as getActiveModMap } from "./utils/getActiveModMap";
export { default as getCtrlKeysByPlatform } from "./utils/getCtrlKeysByPlatform";
export { default as getElementOffset } from "./utils/getElementOffset";
export { default as getId } from "./utils/getId";
export { default as getTranslateByPlacement } from "./utils/getTranslateByPlacement";
export { default as isBrowser } from "./utils/isBrowser";
export { default as isMac } from "./utils/isMac";
export { default as isNumber } from "./utils/isNumber";
export { default as isRefTarget } from "./utils/isRefTarget";
export { default as isString } from "./utils/isString";
export { default as shortenName } from "./utils/shortenName";

export default groovy;
