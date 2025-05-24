import type { AppProps } from 'next/app';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';

// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: 'IRANSans, Arial',
  },
  palette: {
    primary: {
      main: '#B8860B',
      light: '#DAA520',
      dark: '#8B6914',
    },
    secondary: {
      main: '#1F1F1F',
      light: '#2C2C2C',
      dark: '#141414',
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
} 