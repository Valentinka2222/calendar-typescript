import moment from 'moment';
import { updatedEventType } from '../interfaces';

export const validatorHaveEvent = (eventsList: [updatedEventType], dateFrom: string) => {
  const sameEvent = eventsList.some(
    el => moment(dateFrom) >= moment(el.dateFrom) && moment(dateFrom) <= moment(el.dateTo),
  );
  return sameEvent;
};
export const validatorMultMin = (endTime: string) => {
  return String(endTime.slice(3, 5)) !== '00' && Number(endTime.slice(3, 5)) % 15 !== 0;
};
export const validatorMultHour = (startTime: string) => {
  return Number(startTime.slice(3, 5)) % 15 !== 0 && String(startTime.slice(3, 5)) !== '00';
};
export const validatorEndTime = (startTime: string, endTime: string) => {
  return startTime === endTime || Number(endTime.slice(0, 2)) < Number(startTime.slice(0, 2));
};
export const validatorEventDuration = (endTime: string, startTime: string) => {
  return Number(endTime.slice(0, 2)) - Number(startTime.slice(0, 2)) > 6;
};
