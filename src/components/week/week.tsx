import Day from '../day/day';
import './week.scss';

type WeekProps = {
  changeValue: Function;
  setIsHiddenModal: Function;
  weekDates: Array<any>;
  events: any;
  setEvents: Function;
};

const Week = ({ changeValue, setIsHiddenModal, weekDates, events, setEvents }: WeekProps) => {
  return (
    <div className="calendar__week">
      {weekDates.map(dayStart => {
        const dayEnd = new Date(dayStart.getTime()).setHours(dayStart.getHours() + 24);

        const dayEvents = events.sort(
          (event: any) => event.dateFrom > dayStart && event.dateTo < dayEnd,
        );

        return (
          <Day
            setIsHiddenModal={setIsHiddenModal}
            changeValue={changeValue}
            setEvents={setEvents}
            key={dayStart.getDate()}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
          />
        );
      })}
    </div>
  );
};

export default Week;
