'use client';

import { redirect } from 'next/navigation';

import { LoadingSpinner } from '@/app/components/common';
import { useAppSelector } from '@/redux/hooks';

export default function HomeRedirect() {
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
  } else {
    redirect('/dashboard');
  }
}
