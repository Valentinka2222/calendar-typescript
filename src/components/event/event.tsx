import React, { useState } from 'react';
import moment from 'moment';
import EventProps from '../../entities/event';
import { deleteEvent, getEventList } from '../../gateway/eventGateAway';
import './event.scss';
import '../../common.scss';

const Event: React.FC<EventProps> = ({
  setIsHiddenModal,
  height,
  marginTop,
  title,
  time,
  description,
  hourEvents,
  setEvents,
}) => {
  const [isShowDeleteEvent, setIsShowDeleteEvent] = useState(false);
  const eventStyle = {
    height: height,
    marginTop,
  };
  const handleClick = (event: React.MouseEvent<HTMLHeadingElement>) => {
    event.stopPropagation();
    setIsHiddenModal(false);
    setIsShowDeleteEvent(!isShowDeleteEvent);
  };

  const handleDeleteEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsHiddenModal(false);

    return hourEvents.map(({ id, date, dateFrom }) => {
      const start = moment().format('YYYY/MM/DD HH:mm');
      const diff = moment
        .duration(moment(dateFrom, 'YYYY/MM/DD HH:mm').diff(moment(start, 'YYYY/MM/DD HH:mm')))
        .asHours();

      if (diff <= 0.25 && diff > 0 && moment().format('YYYY-MM-DD') === date) {
        alert('You can not delete event earlier than 15 minutes');
        return false;
      } else {
        deleteEvent(id).then(() => getEventList().then(eventsList => setEvents(eventsList)));
      }
    });
  };

  return (
    <div className={`event ${eventStyle}`} onClick={handleClick}>
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
      <div className="event__title">{description}</div>

      {isShowDeleteEvent ? (
        <button onClick={handleDeleteEvent} className=" delete-event-btn">
          <i className="fas fa-trash-alt"></i>
          <span style={{ margin: 'auto' }}>Delete event</span>
        </button>
      ) : null}
    </div>
  );
};

export default Event;
