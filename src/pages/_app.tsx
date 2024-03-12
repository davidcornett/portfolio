import "../app/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useRouter } from "next/router";
import { ThemeProvider } from "next-themes";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ThemeProvider attribute="class">
      <AnimatePresence mode="wait">
        <MotionConfig transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
          <motion.div
            key={router.pathname}
            className="h-full flex flex-col justify-between"
          >
            <Component {...pageProps} className="max-w-[800px] mx-auto" />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 0 }}
              exit={{ scaleX: 1 }}
              className="slide-in"
            />
            <motion.div
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              exit={{ scaleX: 0 }}
              className="slide-out"
            />
          </motion.div>
        </MotionConfig>
      </AnimatePresence>
    </ThemeProvider>
  );
}
