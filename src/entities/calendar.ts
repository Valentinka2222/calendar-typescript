import  { Dispatch } from 'react';
import { hourEventsType } from './interfaces';

type CalendarProps = {
  setIsHiddenModal: Dispatch<boolean>;
  changeValue: (a: string) => void;
  weekDates: Date[];
  events: hourEventsType[];
  setEvents: (events: hourEventsType[]) => void;
};
export default CalendarProps