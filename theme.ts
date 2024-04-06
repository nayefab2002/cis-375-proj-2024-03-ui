'use client';

import { blue } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { Lusitana } from 'next/font/google';

export const lusitana = Lusitana({
  weight: ['400'],
  subsets: ['latin'],
});

export const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          borderBottom: '1px solid #222',
          '@media (prefers-color-scheme: dark)': {
            backgroundColor: '#181818',
          },
        },
      },
    },
    MuiButton: {
      defaultProps: { variant: 'contained' },
      styleOverrides: {
        root: { textTransform: 'none' },
      },
    },
    MuiLink: {
      styleOverrides: { root: { textDecoration: 'none' } },
    },
    MuiOutlinedInput: {
      defaultProps: { size: 'small' },
      styleOverrides: {
        root: {
          '& .MuiSvgIcon-root': { fontSize: 18 },
        },
      },
    },
    MuiTextField: {
      defaultProps: { variant: 'outlined' },
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: 'h1' },
          style: { ...lusitana.style, fontSize: '1.5rem' },
        },
        {
          props: { variant: 'h2' },
          style: { ...lusitana.style, fontSize: '1.4rem' },
        },
        {
          props: { variant: 'h3' },
          style: { ...lusitana.style, fontSize: '1.3rem' },
        },
        {
          props: { variant: 'h4' },
          style: { ...lusitana.style, fontSize: '1.2rem' },
        },
        {
          props: { variant: 'h5' },
          style: { ...lusitana.style, fontSize: '1.1rem' },
        },
        {
          props: { variant: 'h6' },
          style: { ...lusitana.style, fontSize: '1rem' },
        },
      ],
    },
  },
  palette: {
    primary: {
      light: blue[600],
      main: blue[900],
    },
  },
});
