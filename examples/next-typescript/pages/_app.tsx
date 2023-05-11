import "@musy-app/groovy/fonts.css";

import { GroovyProvider } from "@musy-app/groovy";
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <GroovyProvider>
      <Component {...pageProps} />
    </GroovyProvider>
  );
};

export default App;
