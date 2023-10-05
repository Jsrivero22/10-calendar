import { useState } from 'react';

import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { NavBar, CalendarEvent, CalendarModal, FabAddNew, FabDelete } from '../';
import { localizer, getMessagesES } from '../../helpers';
import { useUiStore, useCalendarStore } from '../../hooks';

const CalendarPage = () => {

    const { onDateModal } = useUiStore();
    const { events, setActiveEvent } = useCalendarStore();

    const [ lastView, setLastView ] = useState(localStorage.getItem('lastview') || 'week')

    const eventStyleGetter = ( event, start, end, isSelected ) => {

        const style = {
            backgroundColor: '#347cf7',
            borderRadius: '0px',
            opacity: 0.8,
            color: 'white'
        }

        return {
            style
        }
    }

    const onDoubleClick = event => {
        // console.log({ doubleClick: event });
        onDateModal()
    }

    const onSelect = event => {
        // console.log({ click: event });
        setActiveEvent( event )
    }

    const onViewChanged = event => {
        localStorage.setItem('lastview', event);
        setLastView( event )
    }

    return (
        <div>
            <NavBar />

            <Calendar
                className='p-4'
                culture='es'
                endAccessor="end"
                events={ events }
                defaultView={ lastView }
                localizer={ localizer }
                messages={ getMessagesES() }
                startAccessor="start"
                style={{ height: 'calc( 100vh - 80px )' }}
                eventPropGetter={ eventStyleGetter }
                components={{
                    event: CalendarEvent
                }}
                onDoubleClickEvent={ onDoubleClick }
                onSelectEvent={ onSelect }
                onView={ onViewChanged }
            />

            <CalendarModal />

            <FabAddNew />
            <FabDelete />
        </div>
    )
}

export default CalendarPage