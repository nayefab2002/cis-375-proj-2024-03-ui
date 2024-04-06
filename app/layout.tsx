import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import Box from '@mui/material/Box';
import type { Metadata } from 'next';

import { Navigation, Footer } from '@/app/components/common';
import { Setup } from '@/app/components/utils';
import ReduxProvider from '@/redux/provider';
import { theme } from '@/theme';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hotel Manager',
  icons: {
    icon: ['/favicon.ico'],
    apple: ['/apple-touch-icon.png'],
    shortcut: ['/apple-touch-icon.png'],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='bg-gray-100'>
        <ReduxProvider>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <Setup />

              <Navigation />

              <Box p={2} px={3} minHeight='85vh' bgcolor='#fffefd'>
                {children}
              </Box>

              <Footer />
            </ThemeProvider>
          </AppRouterCacheProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
