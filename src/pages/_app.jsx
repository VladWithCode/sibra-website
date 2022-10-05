import 'tailwindcss/tailwind.css';
import Header from '../components/layout/Header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className='h-screen'>
      <Header />

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
