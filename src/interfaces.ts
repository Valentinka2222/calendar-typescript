export interface hourEventsType {
  id: number;
  dateFrom: string;
  dateTo: string;
  title: string;
  description: string;
  date: string;
}
export interface updatedEventType {
  [key: string]: string;
}
export interface EventsType {
  dateFrom: string;
  dateTo: string;
  title: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
}
