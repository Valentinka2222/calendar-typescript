import React from 'react';
import moment from 'moment';
import { hourEventsType } from '../../interfaces';
import { formatMins } from '../../utils/dateUtils';
import Event from '../event/event';

type HourProps = {
  dataHour: any;
  hourEvents: Array<hourEventsType>;
  setEvents: Function;
  changeValue: Function;
  dataDay: number;
  setIsHiddenModal: Function;
};

const Hour: React.FC<HourProps> = (
  { dataHour, hourEvents, setEvents, changeValue, dataDay, setIsHiddenModal }, // isHiddenModal,
) => {
  const handleClick = (e: any) => {
    setIsHiddenModal(true);

    const createDateStartEvent =
      moment().format('YYYY-MM-') +
      formatMins(Number(dataDay)) +
      ' ' +
      formatMins(Number(e.target.dataset.time) - 1) +
      ':00';

    changeValue(createDateStartEvent);
    return createDateStartEvent;
  };

  return (
    <div className="calendar__time-slot" data-time={dataHour + 1} onClick={handleClick}>
      {hourEvents.map(({ id, dateFrom, dateTo, title, description }) => {
        return (
          <Event
            setIsHiddenModal={setIsHiddenModal}
            setEvents={setEvents}
            key={id}
            hourEvents={hourEvents}
            height={Number(moment(dateFrom).format('mm')) - Number(moment(dateTo).format('mm'))}
            marginTop={moment(dateFrom).format('mm') + 'px'}
            time={`${moment(dateFrom).format('HH:mm')} - ${moment(dateTo).format('HH:mm')}`}
            title={title}
            description={description}
          />
        );
      })}
    </div>
  );
};

export default Hour;
