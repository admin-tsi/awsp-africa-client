import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import { useRouter } from 'next/router';
import { UserProvider } from '../context/user-context';
import { AnimatePresence, motion } from 'framer-motion';

const sairaFont = localFont({
  variable: '--saira-font',
  display: 'swap',
  src: [
    {
      path: '../fonts/Saira-VariableFont_wdth,wght.ttf',
      weight: 'variable',
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <UserProvider>
      <div>
        <main className={`${sairaFont.variable} font-sans`}>
          <Component {...pageProps} />
        </main>
      </div>
    </UserProvider>
  );
}
