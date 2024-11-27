import { useDispatch, useSelector } from "react-redux";
import { dateActions } from "../../../store/date-slice";
import { getWeekNumber } from "../../../util/date";
import { useEffect } from "react";

function WeeksNavigation() {
  const selectedWeek = useSelector((state) => state.date.week);
  const dispatch = useDispatch();

  useEffect(() => {
    const currentWeek = getWeekNumber(new Date());
    dispatch(dateActions.setSelectedWeek(currentWeek));
  }, []);

  const handlePreviousWeek = () => {
    dispatch(dateActions.setSelectedWeek(selectedWeek - 1));
  };
  const handleNextWeek = () => {
    dispatch(dateActions.setSelectedWeek(selectedWeek + 1));
  };

  const cssButtonClasses =
    "p-1 pl-4 pr-4 bg-sections-bg-2 text-elements-color-main rounded-sm hover:bg-pink-500";

  return (
    <div className="flex">
      <button onClick={handlePreviousWeek} className={cssButtonClasses}>
        -
      </button>
      <span className="bg-sections-bg-1 text-elements-color-main p-1 pl-8 pr-8">
        {`Week ${selectedWeek}`}
      </span>
      <button onClick={handleNextWeek} className={cssButtonClasses}>
        +
      </button>
    </div>
  );
}

export default WeeksNavigation;
