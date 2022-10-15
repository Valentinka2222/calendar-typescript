import { useState } from 'react';
import moment from 'moment';
import Header from './components/header/header';
import Calendar from './components/calendar/calendar';
import Modal from './components/modal/modal';
import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils';
import './common.scss';
import { EventsType, hourEventsType } from './interfaces';

export const App = () => {
  const [events, setEvents] = useState<hourEventsType[]>([]);
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [isHiddenModal, setIsHiddenModal] = useState<boolean>();
  const [updatedEvent, setUpdatedEvent] = useState<EventsType>({
    date: '',
    startTime: '',
    endTime: '',
    dateFrom: '',
    dateTo: '',
    title: '',
    description: '',
  });
  const isShowModal = () => {
    setIsHiddenModal(!isHiddenModal);
    if (updatedEvent) {
      setUpdatedEvent(prevState => ({
        ...prevState,
        title: '',
        description: '',
        date: moment().format('YYYY-MM-DD'),
        startTime: moment().format('HH:mm'),
        endTime: moment().add(1, 'hour').format('HH:mm'),
      }));
    }
  };
  const changeValue = (newDate: string) => {
    setUpdatedEvent(prevState => ({
      ...prevState,
      title: '',
      description: '',
      date: moment(newDate).format('YYYY-MM-DD'),
      startTime: moment(newDate).format('HH:mm'),
      endTime: moment(newDate).add(1, 'hour').format('HH:mm'),
      dateFrom: moment(newDate).format('YYYY-MM-DD') + ' ' + moment(newDate).format('HH:mm'),
      dateTo:
        moment(newDate).format('YYYY-MM-DD') + ' ' + moment(newDate).add(1, 'hour').format('HH:mm'),
    }));
  };
  console.log(updatedEvent);
  const handleCurrentWeek = () => setWeekStartDate(weekStartDate => (weekStartDate = new Date()));

  const handleNextWeek = () =>
    setWeekStartDate(
      weekStartDate =>
        (weekStartDate = new Date(weekStartDate.setDate(weekStartDate.getDate() + 7))),
    );

  const handlePreviousWeek = () =>
    setWeekStartDate(
      weekStartDate =>
        (weekStartDate = new Date(weekStartDate.setDate(weekStartDate.getDate() - 7))),
    );

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  return (
    <>
      <Header
        isShowModal={isShowModal}
        handleNextWeek={handleNextWeek}
        handlePreviousWeek={handlePreviousWeek}
        handleCurrentWeek={handleCurrentWeek}
      />
      <Modal
        setIsHiddenModal={setIsHiddenModal}
        setUpdatedEvent={setUpdatedEvent}
        updatedEvent={updatedEvent}
        setEvents={setEvents}
        isHiddenModal={isHiddenModal}
      />
      <Calendar
        changeValue={changeValue}
        weekDates={weekDates}
        events={events}
        setEvents={setEvents}
        setIsHiddenModal={setIsHiddenModal}
      />
    </>
  );
};

export default App;
