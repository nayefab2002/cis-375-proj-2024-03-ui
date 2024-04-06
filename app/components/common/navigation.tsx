'use client';

import * as React from 'react';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import InventoryIcon from '@mui/icons-material/Inventory';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import PaidIcon from '@mui/icons-material/Paid';

import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import Link, { LinkProps } from '@mui/material/Link';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import { useRouter } from 'next/navigation';

import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import {
  useLogoutMutation,
  useRetrieveUserQuery,
} from '@/redux/features/authApiSlice';
import { logout as setLogout } from '@/redux/features/authSlice';

const LOG_OUT = 'Log out';

const guestNavItems = [
  { name: 'Login', href: '/login', icon: <LoginIcon /> },
  { name: 'Sign Up', href: '/register', icon: <AppRegistrationIcon /> },
];

const authenticatedNavItems = [
  { name: 'Dashboard', href: '/dashboard', icon: <DashboardIcon /> },
  { name: 'Reservations', href: '/reservations', icon: <EventAvailableIcon /> },
  { name: 'Billing', href: '/billing', icon: <PaidIcon /> },
  { name: 'Inventory', href: '/inventory', icon: <InventoryIcon /> },
];

const userMenu = [
  { name: 'Account', href: '/account', icon: <AccountCircleIcon /> },
  { name: LOG_OUT, icon: <LogoutIcon /> },
];

const Logo = ({ sx }: { sx: LinkProps['sx'] }) => (
  <Link href='/' sx={sx}>
    <Box display='flex' flexGrow={1} gap={1} alignItems='center'>
      <Image
        src='/hotel-manager-logo.png'
        alt='Hotel Manager Logo'
        width={40}
        height={40}
      />
      <Typography
        variant='h1'
        fontSize='1.5rem'
        sx={{
          color: '#222',
          '@media (prefers-color-scheme: dark)': { color: 'white' },
          pt: '4px', // text vertical center offset
        }}
      >
        Hotel Manager
      </Typography>
    </Box>
  </Link>
);

export default function Navigation() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [logout] = useLogoutMutation();

  const { data: user } = useRetrieveUserQuery();
  const userName = `${[user?.first_name, user?.last_name].filter(Boolean).join(' ') || user?.email || null}`;

  const { isAuthenticated, isLoading } = useAppSelector((state) => state.auth);
  const navItems = isLoading
    ? []
    : isAuthenticated
      ? authenticatedNavItems
      : guestNavItems;

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    logout(undefined)
      .unwrap()
      .then(() => {
        dispatch(setLogout());
      })
      .finally(() => {
        router.push('/');
      });
  };

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Logo sx={{ display: { xs: 'none', md: 'flex' } }} />

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
            }}
          >
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {navItems.map(({ name, icon, href }) => (
                <MenuItem
                  key={name}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  href={href}
                >
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{name}</ListItemText>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Logo sx={{ display: { xs: 'flex', md: 'none' }, mr: 3 }} />

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
              gap: 3,
              px: 3,
            }}
          >
            {navItems.map(({ name, icon, href }) => (
              <Button
                key={name}
                variant='text'
                onClick={handleCloseNavMenu}
                href={href}
                startIcon={icon}
                sx={{ my: 2, color: 'white', display: 'flex' }}
              >
                {name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {isAuthenticated && (
              <Tooltip title='Open settings'>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt={userName}
                    src={`https://picsum.photos/seed/seed-${encodeURIComponent(userName)}/50/50`}
                  />
                </IconButton>
              </Tooltip>
            )}

            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {userName && (
                <div>
                  <Typography sx={{ pt: 0, pb: 1, px: 2 }}>
                    <strong>{userName}</strong>
                  </Typography>
                  <Divider />
                </div>
              )}

              {userMenu.map(({ name, icon, href }) => (
                <MenuItem
                  key={name}
                  onClick={() => {
                    if (name === LOG_OUT) handleLogout();
                    handleCloseUserMenu();
                  }}
                  component={Link}
                  href={href}
                >
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{name}</ListItemText>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
