
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { localizer, getMessagesES } from '../../helpers';
import { addHours } from 'date-fns';

import { NavBar } from "../components/NavBar";


const events = [{
  title: 'cumpleaños',
  notes: 'nothing',
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: '#fafafa',
  user: {
    id: '123',
  }
}];

const messages = getMessagesES() || null;


export const CalendarPage = () => {

  const eventStyleGetter = (event,start,end,isSelected) => {
   const style = {
    backgroundColor: '#347CF7',
    borderRadius: '0px',
    opacity: 0.8,
    color: 'white',
   }
   return {style}
  }

  return (
    <>
      <NavBar/>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        messages={messages}
        eventPropGetter={eventStyleGetter}
      />
    </>
  )
}
