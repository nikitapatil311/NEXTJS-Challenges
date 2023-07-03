import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <SWRConfig
        value={{
          fetcher,
          refreshInterval: 1000,
        }}
      >
        {/* … your app */}
      </SWRConfig>
    </>
  );
}
