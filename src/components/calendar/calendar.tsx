import React from 'react';
import Navigation from '../navigation/navigation';
import Week from '../week/week';
import Sidebar from '../sidebar/sidebar';

import CalendarProps from '../../entities/calendar';

import './calendar.scss';

const Calendar: React.FC<CalendarProps> = ({
  setIsHiddenModal,
  changeValue,
  weekDates,
  events,
  setEvents,
}) => {
  return (
    <section className="calendar">
      <Navigation navWeekDates={weekDates} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week
            setIsHiddenModal={setIsHiddenModal}
            changeValue={changeValue}
            weekDates={weekDates}
            events={events}
            setEvents={setEvents}
          />
        </div>
      </div>
    </section>
  );
};

export default Calendar;
