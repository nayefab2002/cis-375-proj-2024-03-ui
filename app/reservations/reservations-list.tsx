'use client';

import { useState } from 'react';

import EditIcon from '@mui/icons-material/Edit';
import PersonIcon from '@mui/icons-material/Person';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

import { Transition } from './transition';

export function ReservationsList() {
  const [openDialog, setOpenDialog] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const [guestName, setGuestName] = useState('');
  const [roomType, setroomType] = useState('');
  const [checkIn, setCheckIn] = useState(Date);
  const [checkOut, setCheckOut] = useState(Date);

  const reservations = [
    {
      id: 1,
      guestName: 'John Doe',
      checkIn: '2024-4-25',
      checkOut: '2024-4-30',
      roomType: 'Standard',
    },
    {
      id: 2,
      guestName: 'Jane Smith',
      checkIn: '2024-04-10',
      checkOut: '2024-04-15',
      roomType: 'Deluxe',
    },
    {
      id: 3,
      guestName: 'Thomas K.',
      checkIn: '2024-04-10',
      checkOut: '2024-04-15',
      roomType: 'Standard',
    },
    {
      id: 4,
      guestName: 'Jack Smith',
      checkIn: '2024-04-10',
      checkOut: '2024-04-15',
      roomType: 'Standard',
    },
    {
      id: 5,
      guestName: 'Thomas F.',
      checkIn: '2024-04-10',
      checkOut: '2024-04-15',
      roomType: 'Deluxe',
    },
    // Add more reservation objects as needed
  ];

  return (
    <Paper sx={{ p: 2 }} elevation={2}>
      <TextField
        label='Search field'
        type='search'
        size='small'
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      <List sx={{ width: '100%', maxWidth: 380, bgcolor: 'background.paper' }}>
        {reservations
          .filter(({ guestName }) =>
            guestName.match(new RegExp(searchTerm, 'i')),
          )
          .map((reservation) => (
            <ListItem
              key={reservation.id}
              secondaryAction={
                <IconButton
                  sx={{ marginLeft: 30 }}
                  onClick={() => {
                    setGuestName(reservation.guestName);
                    setroomType(reservation.roomType); // Update guestName state
                    setCheckIn(reservation.checkIn);
                    setCheckOut(reservation.checkOut);
                    handleOpenDialog(); // Open the dialog
                  }}
                >
                  <EditIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>

              <ListItemText
                primary={reservation.guestName}
                secondary={reservation.roomType}
              />
            </ListItem>
          ))}
      </List>

      <Dialog
        open={openDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseDialog}
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle>{'Edit Reservation'}</DialogTitle>

        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            id='guestName'
            label='Guest Name'
            type='text'
            fullWidth
            value={guestName}
          />

          <TextField
            autoFocus
            margin='dense'
            id='roomType'
            label='Room type'
            type='text'
            fullWidth
            value={roomType}
          />

          <TextField
            autoFocus
            margin='dense'
            id='CheckIn'
            label='Check In'
            type='text'
            fullWidth
            value={checkIn}
          />

          <TextField
            autoFocus
            margin='dense'
            id='CheckOut'
            label='Check Out'
            type='text'
            fullWidth
            value={checkOut}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleCloseDialog}>Save</Button>
          <Button onClick={handleCloseDialog}>Delete</Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}
