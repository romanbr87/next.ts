import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

import type { AppProps } from "next/app";
import { store } from "@/redux/index";
import { Provider } from "react-redux";

// import "@/styles/globals.css";
// import "@/styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.css";
import "@/styles/style.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Menu />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  );
}
