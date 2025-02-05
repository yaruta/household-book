/**
 * WeeksNavigation component.
 * This component allows users to navigate between weeks. It initializes the current
 * week number and updates the Redux store when the user selects a different week.
 * @returns {JSX.Element} The weeks navigation component.
 */
import { useDispatch, useSelector } from "react-redux";
import { dateActions } from "../../../store/date-slice";
import { getWeekNumber } from "../../../util/date";
import { useEffect } from "react";

function WeeksNavigation() {
  const selectedWeek = useSelector((state) => state.date.week);
  const dispatch = useDispatch();

  useEffect(() => {
    const currentWeek = getWeekNumber(new Date());
    dispatch(dateActions.setSelectedWeek(currentWeek)); // Set the initial week number in Redux store
  }, []);

  /**
   * Decreases the selected week by one.
   */
  const handlePreviousWeek = () => {
    dispatch(dateActions.setSelectedWeek(selectedWeek - 1));
  };
  /**
   * Increases the selected week by one.
   */
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
