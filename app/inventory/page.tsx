import Typography from '@mui/material/Typography';
import type { Metadata } from 'next';

import { RequireAuth } from '@/app/components/utils';

export const metadata: Metadata = {
  title: 'Hotel Manager | Inventory',
};
export default function Page() {
  return (
    <RequireAuth>
      <Typography variant='h2'>Inventory</Typography>
    </RequireAuth>
  );
}
