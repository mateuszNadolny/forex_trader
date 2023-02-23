import Head from 'next/head';

import Layout from '../components/Layout/layout';

import { Provider } from 'react-redux';
import { store } from '../redux/store/store';

import '../styles/globals.css';
//theme
import 'primereact/resources/themes/arya-orange/theme.css';

//core
import 'primereact/resources/primereact.min.css';

//icons
import 'primeicons/primeicons.css';

//primeflex
import 'primeflex/primeflex.css';

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
