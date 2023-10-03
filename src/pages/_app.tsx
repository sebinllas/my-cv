import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Quicksand } from 'next/font/google';

const quicksand = Quicksand({ subsets: ['latin-ext'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${quicksand.className} bg-gray-200 dark:bg-gray-800`}>
      <Component {...pageProps} />
    </div>
  );
}
