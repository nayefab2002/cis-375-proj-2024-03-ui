<<<<<<< HEAD
'use client';

import { redirect } from 'next/navigation';

import { LoadingSpinner } from '@/app/components/common';
import { useAppSelector } from '@/redux/hooks';

export default function Page() {
  const { isLoading, isAuthenticated } = useAppSelector((state) => state.auth);

  if (isLoading) {
    return (
      <div className='flex justify-center align-center mt-80'>
        <LoadingSpinner />
      </div>
    );
  }

  redirect(isAuthenticated ? '/dashboard' : '/login');
=======
import Login from "./Login/page";
import DashBoardPage from "./Dashboard/page";
export default function Home() {
  return <Login/>;
  //return <DashBoardPage/>;
  
  
>>>>>>> a27ff78703c367a76406d795239b933db416eb5c
}
