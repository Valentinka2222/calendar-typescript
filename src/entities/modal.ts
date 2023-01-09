import { Dispatch, SetStateAction } from 'react';
import { hourEventsType } from './interfaces';
import { EventsType } from "./interfaces";

type ModalProps = {
  updatedEvent: EventsType;
  setUpdatedEvent: Dispatch<SetStateAction<EventsType>>;
  isHiddenModal: boolean;
  setIsHiddenModal: Dispatch<boolean>;
  setEvents: (events: hourEventsType[]) => void;
};
export default ModalProps
