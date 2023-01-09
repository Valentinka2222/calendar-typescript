import { Dispatch } from 'react';
import { hourEventsType } from "./interfaces";

type WeekProps = {
  changeValue: (a: string) => void;
  setIsHiddenModal: Dispatch<boolean>;
  weekDates: Date[];
  events: hourEventsType[];
  setEvents: (events: hourEventsType[]) => void;
};
export default WeekProps