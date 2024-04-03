


"use client";
import { Paper,ListItem,Grid,List,ListItemText,IconButton, ListItemAvatar, Avatar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';

import { useState } from 'react';
import { Calendar, Event, CalendarProps, Views,momentLocalizer } from "react-big-calendar";
import moment from "moment";
import TextField from '@mui/material/TextField';
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import 'react-big-calendar/lib/css/react-big-calendar.css';
const BigCalendarWithDnD = withDragAndDrop<Event>(
  Calendar as React.ComponentType<CalendarProps<Event>>
);
export default function Page() {
  
  return <div>
    <Grid container spacing={3}>
      {/* Reservation List */}
      <Grid >
        <ReservationList />
      </Grid>
      {/* Calendar and Add Reservation */}
      <Grid >
        <CalendarSection />
      </Grid>
    </Grid>
  </div>

  }
  

export function ReservationList() {
  const reservations = [
    { id: 1, guestName: 'John Doe', checkIn: '2024-03-25', checkOut: '2024-03-30', roomType: 'Standard' },
    { id: 2, guestName: 'Jane Smith', checkIn: '2024-04-10', checkOut: '2024-04-15', roomType: 'Deluxe' },
    { id: 3, guestName: 'Thomas K.', checkIn: '2024-04-10', checkOut: '2024-04-15', roomType: 'Standard' },
    { id: 4, guestName: 'Jack Smith', checkIn: '2024-04-10', checkOut: '2024-04-15', roomType: 'Standard' },
    { id: 5, guestName: 'Thomas F.', checkIn: '2024-04-10', checkOut: '2024-04-15', roomType: 'Deluxe' },
    // Add more reservation objects as needed
  ];
 
  return (
    <>
      <Paper sx={{px:2}} elevation={2}>
        
        <TextField
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
        />
        
    
        <List sx={{ width: '100%', maxWidth: 380, bgcolor: 'background.paper' }}>
          {reservations.map((reservation) => (
            <ListItem key={reservation.id} secondaryAction={<IconButton sx={{marginLeft:30}}>
              <EditIcon/>
            </IconButton>} >
              <ListItemAvatar>
                <Avatar><PersonIcon/></Avatar>
              </ListItemAvatar>

              <ListItemText primary={reservation.guestName} secondary={reservation.roomType } />
            
            </ListItem>
          ))}
        </List>

      </Paper>

    </>
    
  );
}

export function CalendarSection() {
  moment.locale("en-GB");
  const localizer = momentLocalizer(moment);
  return  <div className="App">
  <Calendar
    views={["day", "agenda", "work_week", "month"]}
  
    localizer={localizer}
    defaultDate={new Date()}
    defaultView="month"
    //events={eventsData}
    style={{ height: "100vh",width:"100vh" ,marginLeft:10}}
    //onSelectEvent={(event) => alert(event.title)}
    //onSelectSlot={handleSelect}
  />
</div>
   
}