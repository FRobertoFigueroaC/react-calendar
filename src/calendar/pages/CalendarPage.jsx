import { useState } from 'react';

import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { localizer, getMessagesES } from '../../helpers';
import { addHours } from 'date-fns';

import { NavBar } from "../components/NavBar";
import { CalendarEventBox } from '../components/CalendarEventBox';
import { CalendarModal } from '../components/CalendarModal';


const events = [{
  title: 'cumpleaños',
  notes: 'nothing',
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: '#fafafa',
  user: {
    name: 'Roberto',
    id: '123',
  }
}];

// Add this to calendar to change to spanish 
//messages={messages}
// const messages = getMessagesES() || null;


export const CalendarPage = () => {

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week');

  const eventStyleGetter = (event,start,end,isSelected) => {
   const style = {
    backgroundColor: '#347CF7',
    borderRadius: '0px',
    opacity: 0.8,
    color: 'white',
   }
   return {style}
  }

  const onDoubleClick = (event) => {
    console.log({doubleClick: event});
   
  }
  const onSelect = (event) => {
   console.log({select:event});
  }
  const onViewChanged = (event) => {
    localStorage.setItem('lastView', event)
    setLastView(event);
  }

  return (
    <>
      <NavBar/>
      
      <Calendar
        localizer={localizer}
        events={events}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEventBox
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
      />
      <CalendarModal/>
    </>
  )
}
