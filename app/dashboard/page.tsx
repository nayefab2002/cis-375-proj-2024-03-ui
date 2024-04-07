import { Grid } from '@mui/material';

import { RequireAuth } from '@/app/components/utils';

import { default as Header } from './header';
import { default as Stats } from './stats';
import { default as TodaysActivity } from './todays-activity';
import { default as UpcomingReservations } from './upcoming-reservations';

export default function Page() {
  return (
    <RequireAuth>
      <Header />

      <Stats />

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <UpcomingReservations />
        </Grid>

        <Grid item xs={12} md={6}>
          <TodaysActivity />
        </Grid>
      </Grid>
    </RequireAuth>
  );
}
