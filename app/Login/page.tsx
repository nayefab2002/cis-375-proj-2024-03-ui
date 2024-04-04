import { Box } from '@mui/material';

import LoginForm from '@/components/login-form';

export default function LoginPage() {
  return (
    <Box
      m={-2}
      mx={-3}
      className='flex items-center justify-center h-screen bg-blue-900'
    >
      <LoginForm />
    </Box>
  );
}
