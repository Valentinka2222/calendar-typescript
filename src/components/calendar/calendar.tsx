import React, { Dispatch } from 'react';
import Navigation from '../navigation/navigation';
import Week from '../week/week';
import Sidebar from '../sidebar/sidebar';
import { hourEventsType } from '../../interfaces';
import './calendar.scss';

type CalendarProps = {
  setIsHiddenModal: Dispatch<boolean>;
  changeValue: (a: string) => void;
  weekDates: any;
  events: hourEventsType[];
  setEvents: (events: hourEventsType[]) => void;
};

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
