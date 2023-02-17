import Head from 'next/head';

import Layout from '../components/Layout/layout';

import { Provider } from 'react-redux';
import { store } from '../redux/store/store';

import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Provider store={store}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </Provider>
    </Layout>
  );
}
