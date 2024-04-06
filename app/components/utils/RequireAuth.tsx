'use client';

import Container from '@mui/material/Container';
import { redirect } from 'next/navigation';

import { LoadingSpinner } from '@/app/components/common';
import { useAppSelector } from '@/redux/hooks';

interface RequireAuthProps {
  children: React.ReactNode;
}

export default function RequireAuth({ children }: RequireAuthProps) {
  const { isLoading, isAuthenticated } = useAppSelector((state) => state.auth);

  if (isLoading) {
    return (
      <div className='flex justify-center align-center mt-80'>
        <LoadingSpinner />
      </div>
    );
  }

  if (!isAuthenticated) {
    redirect('/login');
  }

  return <Container maxWidth='xl'>{children}</Container>;
}
