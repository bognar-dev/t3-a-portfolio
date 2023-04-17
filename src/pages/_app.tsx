import { AppProps, type AppType } from "next/app";
import { Analytics } from '@vercel/analytics/react';
import { api } from "~/utils/api";
import { CartProvider } from '~/context/CartProvider'
import Layout from '~/components/Layout';
import "~/styles/globals.scss";

const MyApp: AppType = ({ Component, pageProps }:AppProps) => {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </CartProvider>
  );
};

export default api.withTRPC(MyApp);
