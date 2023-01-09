import { Dispatch } from 'react';
import { hourEventsType } from './interfaces';

type DayProps = {
  changeValue: (a: string) => void;
  setIsHiddenModal: Dispatch<boolean>;
  dataDay: number;
  dayEvents:  hourEventsType[];
  setEvents: (events: hourEventsType[]) => void;
};
export default DayProps