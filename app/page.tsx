'use client';

import { redirect } from 'next/navigation';

import { useAppSelector } from '@/redux/hooks';

export default function Page() {
  const { isAuthenticated, isLoading } = useAppSelector((state) => state.auth);

  if (!isLoading) {
    redirect(isAuthenticated ? '/dashboard' : '/login');
  }
}
