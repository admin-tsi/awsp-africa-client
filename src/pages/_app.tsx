import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import { useRouter } from 'next/router';
import { UserProvider } from '@/context/user-context';
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
  const router = useRouter()
  return (
    <UserProvider>
      <AnimatePresence mode="wait" key={router.pathname}>
        <motion.div>
          <main className={`${sairaFont.variable} font-sans`}>
            <Component {...pageProps} />
          </main>
          <motion.div
            className="absolute z-50 top-0 left-0 w-[100%] h-[100%] bg-primary origin-bottom"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          ></motion.div>
          <motion.div
            className="absolute z-50 top-0 left-0 w-[100%] h-[100%] bg-primary origin-top"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          ></motion.div>
        </motion.div>
      </AnimatePresence>
    </UserProvider>
  );
}
