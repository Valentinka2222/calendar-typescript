import { Dispatch } from 'react';
import { hourEventsType } from './interfaces';

type EventProps = {
  setIsHiddenModal: Dispatch<boolean>;
  height: number;
  marginTop: string;
  title: string;
  time: string;
  description: string;
  hourEvents: Array<hourEventsType>;
  setEvents: (events: hourEventsType[]) => void;
};
export default EventProps