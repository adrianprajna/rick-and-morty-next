import "../styles/globals.css";
import type { AppProps } from "next/app";
import { LoadingProvider } from "../provider/loading.provider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LoadingProvider>
      <Component {...pageProps} />
    </LoadingProvider>
  );
}
export default MyApp;
