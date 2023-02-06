import "../styles/globals.css";
import { AppProps } from "next/app";
import { StateContextProvider } from "@/context/StateContextProvider";

export default function MyApp({ Component, pageProps }: AppProps<{}>) {
  return (
    <StateContextProvider>
      <Component {...pageProps} />
    </StateContextProvider>
  );
}
