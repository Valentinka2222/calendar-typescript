import React, { useState, useEffect} from 'react';
import moment from 'moment';
import Hour from '../hour/hour';
import './day.scss';
import DayProps from '../../entities/day';

const Day: React.FC<DayProps> = ({
  changeValue,
  setIsHiddenModal,
  dataDay,
  dayEvents,
  setEvents,
}) => {
  const hours = Array(24)
    .fill(null)
    .map((val, index) => index);

  const startPosition =
    Number(moment().local().format('HH')) * 60 -
    Number(moment().local().format('HH')) +
    Number(moment().local().format('mm'));

  const [isClock, setIsClock] = useState(startPosition);

  useEffect(() => {
    const idTimmer = setInterval(() => {
      setIsClock(isClock => isClock + 1);
    }, 60000);
    return () => clearInterval(idTimmer);
  }, []);

  const elemRedLine = <div className="red-line" style={{ top: isClock + 'px' }} />;

  return (
    <div className="calendar__day" data-day={dataDay}>
      {Number(moment().local().format('DD')) === dataDay ? elemRedLine : null}
      {hours.map(hour => {
        const hourEvents = dayEvents.filter(
          event =>
            Number(moment(event['dateFrom']).format('HH')) === hour &&
            Number(moment(event['dateFrom']).format('DD')) === dataDay,
        );

        return (
          <Hour
            setIsHiddenModal={setIsHiddenModal}
            changeValue={changeValue}
            dataDay={dataDay}
            setEvents={setEvents}
            key={dataDay + hour}
            dataHour={hour}
            hourEvents={hourEvents}
          />
        );
      })}
    </div>
  );
};

export default Day;
