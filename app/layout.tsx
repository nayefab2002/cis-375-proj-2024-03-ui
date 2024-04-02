import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import type { Metadata } from 'next';

import { Navigation } from './components/navigation';
import { theme } from './theme';
import './globals.css';

export const metadata: Metadata = {
  title: 'CIS-375 Hotel Manager',
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
      <ThemeProvider theme={theme}>
        <body>
          <Navigation />

          <Box m={2} mx={3}>
            {children}
          </Box>
        </body>
      </ThemeProvider>
    </html>
  );
}
