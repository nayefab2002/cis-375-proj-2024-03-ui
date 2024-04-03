import Typography from '@mui/material/Typography';


"use client";
import { Paper,ListItem,Grid,List,ListItemText,IconButton, ListItemAvatar, Avatar,Dialog, DialogTitle, DialogContent, DialogActions, Button,Slide,DialogContentText } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';
import { useState,forwardRef } from 'react';
import { Calendar, Event, CalendarProps, Views,momentLocalizer, DateLocalizer } from "react-big-calendar";
import moment from "moment";
import TextField from '@mui/material/TextField';
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import bookings from './bookings';
const BigCalendarWithDnD = withDragAndDrop<Event>(
  Calendar as React.ComponentType<CalendarProps<Event>>
);
import { TransitionProps } from '@mui/material/transitions';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function Page() {
  const [openReservationDialog, SetOpenReservationDialog]=useState(false);
  const handleOpenDialog=()=>{
    SetOpenReservationDialog(true);
  }
  const handleCloseDialog=()=>{
    SetOpenReservationDialog(false);
  }
  return <div>
    <Grid container spacing={1} marginLeft={10}>
      
      {/* Reservation List */}
      <Grid padding={2}>
        <Button onClick={handleOpenDialog}>Add Reservation</Button>
        <ReservationList />
      </Grid>
      {/* Calendar and Add Reservation */}
      <Grid >
        <CalendarSection />
      </Grid>
      <Dialog
        open={openReservationDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseDialog}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Add Reservation"}</DialogTitle>
        <DialogContent>
        <TextField
        autoFocus
        margin="dense"
        id="guestName"
        label="Guest Name"
        type="text"
        fullWidth
        value={""}
        />
         <TextField
        autoFocus
        margin="dense"
        id="roomType"
        label="Room type"
        type="text"
        fullWidth
        value={""}
        />
         <TextField
        autoFocus
        margin="dense"
        id="CheckIn"
        label="Check In"
        type="text"
        fullWidth
        value={""}
        />
        <TextField
        autoFocus
        margin="dense"
        id="CheckOut"
        label="Check Out"
        type="text"
        fullWidth
        value={""}
        />
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleCloseDialog}>Save</Button>
          <Button onClick={handleCloseDialog}>Delete</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  </div>

  }
  
export function ReservationList() {
  const [openDialog, setOpenDialog]=useState(false);
  const handleOpenDialog=()=>{
    setOpenDialog(true);
  }
  const handleCloseDialog=()=>{
    setOpenDialog(false);
  }

  const[guestName, setGuestName]=useState("");
  const [roomType, setroomType]=useState("");
  const[checkIn, setCheckIn]=useState(Date);
  const[checkOut, setCheckOut]=useState(Date);
 
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
    <>
      <Paper sx={{ px: 2 }} elevation={2}>
        <TextField
          id='filled-search'
          label='Search field'
          type='search'
          variant='filled'
        />

        <List
          sx={{ width: '100%', maxWidth: 380, bgcolor: 'background.paper' }}
        >
          {reservations.map((reservation) => (
            <ListItem
              key={reservation.id}
              secondaryAction={
                <IconButton sx={{ marginLeft: 30 }}  onClick={() => {
                  setGuestName(reservation.guestName);
                  setroomType(reservation.roomType); // Update guestName state
                  setCheckIn(reservation.checkIn);
                  setCheckOut(reservation.checkOut);
                  handleOpenDialog(); // Open the dialog
                }}>
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
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Edit Reservation"}</DialogTitle>
        <DialogContent>
        <TextField
        autoFocus
        margin="dense"
        id="guestName"
        label="Guest Name"
        type="text"
        fullWidth
        value={guestName}
        />
         <TextField
        autoFocus
        margin="dense"
        id="roomType"
        label="Room type"
        type="text"
        fullWidth
        value={roomType}
        />
         <TextField
        autoFocus
        margin="dense"
        id="CheckIn"
        label="Check In"
        type="text"
        fullWidth
        value={checkIn}
        />
        <TextField
        autoFocus
        margin="dense"
        id="CheckOut"
        label="Check Out"
        type="text"
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
    </>
  );
}

export function CalendarSection() {
  
  const [booking, setMybooking] = useState(bookings);
  moment.locale("en-GB");
  const localizer = momentLocalizer(moment);
  return  <div className="App">
    
  <BigCalendarWithDnD
    views={["day", "agenda", "work_week", "month"]}
    timeslots={12}
    localizer={localizer}
    defaultDate={new Date()}
    defaultView="month"
    events={booking}
    style={{ height: "100vh",width:"100vh" ,marginLeft:10}}
    onSelectEvent={(booking) => alert(booking.title)}
    //onSelectSlot={handleSelect}
  />
</div>
   
}
