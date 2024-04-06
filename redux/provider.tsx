'use client';

import { makeStore } from './store';
import { Provider } from 'react-redux';

interface ProviderProps {
  children: React.ReactNode;
}

export default function CustomProvider({ children }: ProviderProps) {
  return <Provider store={makeStore()}>{children}</Provider>;
}
