import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "@/layout/main-layout";
import { storeWrapper } from "@/store/store";
import { Provider } from "react-redux";

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = storeWrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...props.pageProps} />
      </MainLayout>
    </Provider>
  );
}
