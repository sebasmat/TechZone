import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { storeWrapper } from "@/store/store";
import { Provider } from "react-redux";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, ...rest }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const { store, props } = storeWrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <UserProvider>
        {getLayout(<Component {...props.pageProps} />)}
        {/*         <MainLayout>
          <Component {...props.pageProps} />
        </MainLayout> */}
      </UserProvider>
    </Provider>
  );
}
