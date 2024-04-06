'use client';

import { useState } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { RequireAuth } from '@/app/components/utils';
import { ReservationsList } from './reservations-list';
import { ReservationsCalendar } from './reservations-calendar';
import { Transition } from './transition';

export default function Page() {
  const [openReservationDialog, SetOpenReservationDialog] = useState(false);

  const handleOpenDialog = () => {
    SetOpenReservationDialog(true);
  };

  const handleCloseDialog = () => {
    SetOpenReservationDialog(false);
  };

  return (
    <RequireAuth>
      <Typography variant='h2' gutterBottom>
        Reservations
      </Typography>

      <Grid container spacing={3}>
        {/* Reservation List */}
        <Grid item xs={12} sm={6} md={2}>
          <Button
            size='small'
            onClick={handleOpenDialog}
            sx={{ mb: 2, width: '100%' }}
          >
            Add Reservation
          </Button>

          <ReservationsList />
        </Grid>

        {/* Calendar and Add Reservation */}
        <Grid item xs={12} sm={6} md={10}>
          <ReservationsCalendar />
        </Grid>
      </Grid>

      <Dialog
        open={openReservationDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseDialog}
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle>{'Add Reservation'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            id='guestName'
            label='Guest Name'
            type='text'
            fullWidth
            value={''}
          />

          <TextField
            autoFocus
            margin='dense'
            id='roomType'
            label='Room type'
            type='text'
            fullWidth
            value={''}
          />

          <TextField
            autoFocus
            margin='dense'
            id='CheckIn'
            label='Check In'
            type='text'
            fullWidth
            value={''}
          />

          <TextField
            autoFocus
            margin='dense'
            id='CheckOut'
            label='Check Out'
            type='text'
            fullWidth
            value={''}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleCloseDialog}>Save</Button>
          <Button onClick={handleCloseDialog}>Delete</Button>
        </DialogActions>
      </Dialog>
    </RequireAuth>
  );
}
