'use client';

import { useState } from 'react';

import moment from 'moment';
import {
  Calendar,
  CalendarProps,
  Event,
  momentLocalizer,
} from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const reservations = [
  {
    id: 0,
    title: 'John Doe- Standard',
    allDay: true,
    start: new Date(2024, 3, 25),
    end: new Date(2024, 3, 30),
  },
  {
    id: 1,
    title: 'Jane Smith- Deluxe',
    start: new Date(2024, 3, 10),
    end: new Date(2024, 3, 15),
  },
  {
    id: 2,
    title: 'Jack Smith- Standard',
    start: new Date(2024, 3, 10, 13, 0, 0, 0),
    end: new Date(2024, 3, 15, 13, 0, 0, 0),
  },
  {
    id: 3,
    title: 'Thomas k.- Standard',
    start: new Date(2024, 3, 10, 12, 0, 0, 0),
    end: new Date(2024, 3, 15, 12, 0, 0, 0),
  },
];

const BigCalendarWithDnD = withDragAndDrop<Event>(
  Calendar as React.ComponentType<CalendarProps<Event>>,
);

export function ReservationsCalendar() {
  moment.locale('en-US');

  const localizer = momentLocalizer(moment);

  return (
    <div className='App'>
      <BigCalendarWithDnD
        views={['day', 'agenda', 'work_week', 'month']}
        timeslots={12}
        localizer={localizer}
        defaultDate={new Date()}
        defaultView='month'
        events={reservations}
        style={{ height: '100vh', width: '100vh', marginLeft: 10 }}
        onSelectEvent={({ title }) => alert(title)}
        // onSelectSlot={handleSelect}
      />
    </div>
  );
}
