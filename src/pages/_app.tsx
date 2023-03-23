import { type AppType } from "next/app";

import { api } from "~/utils/api";
import { CartProvider } from '~/context/CartProvider'
import Layout from '~/components/Layout';
import "~/styles/globals.scss";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
};

export default api.withTRPC(MyApp);
