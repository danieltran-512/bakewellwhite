import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init();
  }, []);
  return <Component {...pageProps} /> 
}

export default MyApp
