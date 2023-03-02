import { format, getYear, subMonths, addMonths } from 'date-fns';
import { useMonthlyCalendar } from '@zach.codes/react-calendar';

const MonthlyNav = () => {
  let { currentMonth, onCurrentMonthChange } = useMonthlyCalendar();

  return (
    <div className="calendarNav flex justify-end mb-4">
      
      {/* <button
        onClick={() => onCurrentMonthChange(subMonths(currentMonth, 1))}
        className="prev cursor-pointer"
      >
      </button>
      
      <button
        onClick={() => onCurrentMonthChange(addMonths(currentMonth, 1))}
        className="next cursor-pointer"
      >
      </button> */}

      <div className="currentMonth ml-4 mr-4 w-32 text-center">
        {format(
          currentMonth,
          getYear(currentMonth) === getYear(new Date()) ? 'LLLL' : 'LLLL yyyy'
        )}
      </div>

      <button
        onClick={() => onCurrentMonthChange(subMonths(currentMonth, 1))}
        className="prev cursor-pointer"
      >
      </button>
      
      <button
        onClick={() => onCurrentMonthChange(addMonths(currentMonth, 1))}
        className="next cursor-pointer"
      >
      </button>

    </div>
  );
}

export default MonthlyNav;