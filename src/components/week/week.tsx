import React, { Dispatch } from 'react';
import { hourEventsType, EventsType } from '../../interfaces';
import Day from '../day/day';
import './week.scss';

type WeekProps = {
  changeValue: (a: string) => void;
  setIsHiddenModal: Dispatch<boolean>;
  weekDates: [any];
  events: hourEventsType[];
  setEvents: (events: hourEventsType[]) => void;
};

const Week = ({ changeValue, setIsHiddenModal, weekDates, events, setEvents }: WeekProps) => {
  return (
    <div className="calendar__week">
      {weekDates.map(dayStart => {
        const dayEnd = new Date(dayStart.getTime()).setHours(dayStart.getHours() + 24);

        const dayEvents = events.sort(
          event =>
            Number(event.dateFrom) - Number(dayStart) && Number(event.dateTo) - Number(dayEnd),
        );

        return (
          <Day
            setIsHiddenModal={setIsHiddenModal}
            changeValue={changeValue}
            setEvents={setEvents}
            key={dayStart.getDate()}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
          />
        );
      })}
    </div>
  );
};

export default Week;
