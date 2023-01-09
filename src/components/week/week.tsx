import WeekProps from '../../entities/week';
import Day from '../day/day';
import './week.scss';

const Week = ({ changeValue, setIsHiddenModal, weekDates, events, setEvents }: WeekProps) => {
  return (
    <div className="calendar__week">
      {weekDates.map(dayStart => {
        const dayEnd = new Date(dayStart.getTime()).setHours(dayStart.getHours() + 24);

        const dayEvents = events.sort(
          event =>
            Number(event.dateFrom) - Number(dayStart) && Number(event.dateTo) - Number(dayEnd),
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
