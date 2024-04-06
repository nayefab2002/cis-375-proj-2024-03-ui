'use client';
import Typography from '@mui/material/Typography';
//export default function BillingPage() {
// return <Typography variant='h2'>Billing</Typography>;
//}
import React, { useState } from 'react';
import {
  Paper,
  ListItem,
  Grid,
  List,
  ListItemText,
  IconButton,
  ListItemAvatar,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Slide,
  DialogContentText,
  TextField,
  Box,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { amber, blue, blueGrey, green } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
interface Room {
  id: number;
  name: string;
  price: number;
}

interface Guest {
  id: number;
  name: string;
  email: string;
}

interface Bill {
  id: number;
  guestId: number;
  roomId: number;
  amount: number;
  billingPeriod: string;
}

const BillingPage: React.FC = () => {
  const [selectedRooms, setSelectedRooms] = useState<Room[]>([]);
  const [selectedGuest, setSelectedGuest] = useState<Guest | null>(null);
  const [billingPeriod, setBillingPeriod] = useState<string>('January 2024'); // Example starting period
  const [bills, setBills] = useState<Bill[]>([]);

  // Dummy data for rooms and guests
  const rooms: Room[] = [
    { id: 1, name: 'Standard', price: 100 },
    { id: 2, name: 'Deluxe', price: 150 },
    { id: 3, name: 'Suite', price: 250 },
  ];

  const guests: Guest[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'John Smith', email: 'john45@example.com' },
    { id: 4, name: 'Thomas K.', email: 'thomas89@example.com' },
  ];

  const handleRoomSelect = (room: Room) => {
    const isSelected = selectedRooms.some(
      (selectedRoom) => selectedRoom.id === room.id,
    );
    if (!isSelected) {
      setSelectedRooms([...selectedRooms, room]);
    } else {
      setSelectedRooms(
        selectedRooms.filter((selectedRoom) => selectedRoom.id !== room.id),
      );
    }
  };

  const handleGuestSelect = (guest: Guest) => {
    setSelectedGuest(guest);
  };

  const handleSendBill = () => {
    if (selectedGuest) {
      selectedRooms.forEach((room) => {
        const bill: Bill = {
          id: Math.floor(Math.random() * 1000), // Example random id generation
          guestId: selectedGuest.id,
          roomId: room.id,
          amount: room.price,
          billingPeriod: billingPeriod,
        };
        setBills([...bills, bill]);
      });
      setSelectedRooms([]);
    }
  };

  const handleGenerateReport = () => {
    if (selectedGuest) {
      const guestBills = bills.filter(
        (bill) => bill.guestId === selectedGuest.id,
      );
      // Generate report using guestBills for the specified period

      // Create a dialog to show user
      console.log(
        `Generating report for ${selectedGuest.name} for the period ${billingPeriod}`,
      );
      console.log(guestBills);
    }
  };

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
          },
          marginLeft: 30,
        }}
      >
        <Grid sx={{ px: 3 }}>
          <h2>Guest List</h2>
          <Paper>
            <TextField
              id='outlined-basic'
              label='Search Guest'
              variant='outlined'
            />
            <List
              sx={{ width: '100%', maxWidth: 380, bgcolor: 'background.paper' }}
            >
              {guests.map((guest) => (
                <ListItem
                  onClick={() => {
                    handleGuestSelect(guest);
                  }}
                  secondaryAction={
                    selectedGuest?.id === guest.id ? (
                      <CheckIcon sx={{ color: green[500] }} />
                    ) : null
                  }
                >
                  <ListItemText primary={guest.name} secondary={guest.email} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
        {selectedGuest && (
          <>
            <Paper sx={{ px: 2 }}>
              <h2>Select Rooms</h2>
              <List>
                {rooms.map((room) => (
                  <ListItem>
                    <Checkbox
                      checked={selectedRooms.some(
                        (selectedRoom) => selectedRoom.id === room.id,
                      )}
                      onChange={() => handleRoomSelect(room)}
                      inputProps={{ 'aria-label': 'controlled' }}
                    />
                    <ListItemText>
                      {room.name} - ${room.price}
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
              <Button
                sx={{
                  background: blue[200],
                  color: blueGrey,
                  marginLeft: 15,
                }}
              >
                Send Bill
              </Button>
            </Paper>
          </>
        )}
        {selectedGuest && (
          <>
            <Paper sx={{ px: 2 }}>
              <h2>Generate Report</h2>
              <TextField
                sx={{ marginTop: 3 }}
                id='outlined-basic'
                variant='outlined'
                value={billingPeriod}
                onChange={(value) => setBillingPeriod(value.target.value)}
              />
              <Button
                sx={{
                  marginTop: 3,
                  background: blue[200],
                  color: blueGrey,
                  marginLeft: 2,
                }}
                onClick={handleGenerateReport}
              >
                Generate Report
              </Button>
            </Paper>
          </>
        )}
      </Box>
    </div>
  );
};

export default BillingPage;
