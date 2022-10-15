import React, { useEffect, Dispatch, SetStateAction } from 'react';
import { EventsType, hourEventsType } from '../../interfaces';
import { сreateEvent } from '../../gateway/eventGateAway';
import { getEventList } from '../../gateway/eventGateAway';
import {
  validatorHaveEvent,
  validatorMultMin,
  validatorMultHour,
  validatorEndTime,
  validatorEventDuration,
} from '../../validators/validators';
import './modal.scss';

type ModalProps = {
  updatedEvent: EventsType;
  setUpdatedEvent: Dispatch<SetStateAction<EventsType>>;
  isHiddenModal: boolean;
  setIsHiddenModal: Dispatch<boolean>;
  setEvents: (events: hourEventsType[]) => void;
};

const Modal: React.FC<ModalProps> = ({
  setIsHiddenModal,
  updatedEvent,
  setUpdatedEvent,
  setEvents,
  isHiddenModal,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!(event.target instanceof HTMLInputElement)) {
      return;
    }
    let startTimeEvent: string;
    let endTimeEvent: string;
    const { name, value } = event.target;
    const { date, startTime, endTime } = updatedEvent;

    if (event && name === 'startTime') {
      startTimeEvent = date + ' ' + value || date + ' ' + startTime;
      endTimeEvent = date + ' ' + endTime || date + ' ' + value;
    }
    if (event && name === 'endTime') {
      startTimeEvent = date + ' ' + startTime || date + '' + value;
      endTimeEvent = date + ' ' + value || date + '' + startTime;
    } else {
      startTimeEvent = date + ' ' + startTime;
      endTimeEvent = date + ' ' + endTime;
    }

    setUpdatedEvent(prevState => ({
      ...prevState,
      [name]: value,
      dateFrom: startTimeEvent,
      dateTo: endTimeEvent,
    }));
  };
  useEffect(() => {
    getEventList().then(eventsList => setEvents(eventsList));
  }, []);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>, eventData: EventsType) => {
    const { endTime, startTime, dateFrom } = eventData;
    if (validatorMultMin(endTime)) {
      alert('Time must be a multiple of 15 minutes');
      return;
    } else if (validatorMultHour(startTime)) {
      alert('Time must be a multiple of 15 minutes');
      return;
    } else if (validatorEndTime(startTime, endTime)) {
      alert('Please select another end time');
      return;
    } else if (validatorEventDuration(endTime, startTime)) {
      alert('The event must last more than 6 hours');
      return;
    } else {
      getEventList().then(eventsList => {
        if (validatorHaveEvent(eventsList, dateFrom)) {
          alert('You have event in this time!');
          return;
        } else {
          сreateEvent(eventData).then(() =>
            getEventList().then(eventsList => setEvents(eventsList)),
          );
        }
      });
    }

    event.preventDefault();
    // event.target.reset();
  };

  const handleShowModal = () => {
    setIsHiddenModal(false);
  };

  return (
    <div className={!isHiddenModal ? 'modal overlay hidden' : 'modal overlay'}>
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn" onClick={handleShowModal}>
            +
          </button>
          <form className="event-form" onSubmit={event => handleSubmit(event, updatedEvent)}>
            <input
              type="text"
              onChange={handleChange}
              value={updatedEvent.title}
              name="title"
              placeholder="Title"
              className="event-form__field"
            />
            <div className="event-form__time">
              <input
                step="1"
                onChange={handleChange}
                value={updatedEvent.date}
                type="date"
                name="date"
                className="event-form__field"
              />
              <input
                type="time"
                onChange={handleChange}
                value={updatedEvent.startTime}
                name="startTime"
                className="event-form__field"
              />
              <span>-</span>
              <input
                type="time"
                name="endTime"
                onChange={handleChange}
                value={updatedEvent.endTime}
                className="event-form__field"
              />
            </div>
            <input
              type="text"
              onChange={e => handleChange(e)}
              name="description"
              value={updatedEvent.description}
              placeholder="Description"
              className="event-form__field"
            />
            <button type="submit" className="event-form__submit-btn">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
