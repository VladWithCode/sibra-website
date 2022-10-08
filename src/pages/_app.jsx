import { QueryClient, QueryClientProvider } from 'react-query';

import 'tailwindcss/tailwind.css';
import Header from '../components/layout/Header';
import '../styles/globals.css';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />

      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
