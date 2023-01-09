import { Dispatch } from 'react';
import { hourEventsType } from './interfaces';

type HourProps = {
  dataHour: number;
  hourEvents: Array<hourEventsType>;
  setEvents: (events: hourEventsType[]) => void;
  changeValue: (a: string) => void;
  dataDay: number;
  setIsHiddenModal: Dispatch<boolean>;
};
export default HourProps