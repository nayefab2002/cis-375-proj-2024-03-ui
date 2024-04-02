import {
  AccountCircle,
  EventAvailable,
  Inventory,
  Logout,
  Paid,
} from '@mui/icons-material';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import kebabCase from 'lodash/kebabCase';

const navLinks = [
  { name: 'Reservations', href: '/reservations', icon: <EventAvailable /> },
  { name: 'Billing', href: '/billing', icon: <Paid /> },
  { name: 'Inventory', href: '/inventory', icon: <Inventory /> },
  { name: 'Account', href: '/account', icon: <AccountCircle /> },
  { name: 'Logout', icon: <Logout /> },
];

export const Navigation = () => {
  return (
    <Box
      display='flex'
      flexDirection='row'
      alignItems='center'
      p={1}
      px={3}
      sx={{
        bgcolor: 'white',
        borderBottom: '1px solid #222',
        '@media (prefers-color-scheme: dark)': {
          bgcolor: '#181818',
          color: 'white',
        },
      }}
    >
      <Link href='/'>
        <Box display='flex' flexGrow={1} gap={2} alignItems='center'>
          <Image
            src='/hotel-manager-logo.png'
            alt='Hotel Manager Logo'
            width={50}
            height={50}
          />
          <Typography
            variant='h1'
            fontSize='2.2em'
            sx={{
              color: '#222',
              '@media (prefers-color-scheme: dark)': { color: 'white' },
              pt: '4px',
            }}
          >
            Hotel Manager
          </Typography>
        </Box>
      </Link>

      <Box display='flex' flexGrow={1} gap={4} justifyContent='flex-end'>
        {navLinks.map(({ name, icon }) => {
          return (
            <Link
              href={kebabCase(name)}
              key={name}
              className='flex gap-2 text-sm md:flex-none'
              sx={{
                '@media (prefers-color-scheme: dark)': {
                  color: 'white',
                },
              }}
            >
              {icon}
              <p className='hidden md:block'>{name}</p>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
};
