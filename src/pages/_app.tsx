import { AppProps, type AppType } from "next/app";
import { Analytics } from '@vercel/analytics/react';
import { api } from "~/utils/api";
import Layout from '~/components/Layout';
import "~/styles/globals.scss";

const MyApp: AppType = ({ Component, pageProps }:AppProps) => {
  return (
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
  );
};

export default api.withTRPC(MyApp);
