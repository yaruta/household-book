/**
 * YearsNavigation component.
 * This component renders a dropdown for selecting a year. It initializes the selected
 * year in the Redux store upon mounting and updates the state when a new year is selected.
 * @returns {JSX.Element} The years navigation component.
 */

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { dateActions } from "../../../store/date-slice";

function YearsNavigation() {
  const currentYear = new Date().getFullYear();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dateActions.setSelectedYear(currentYear));
  }, []);

  /**
   * Handles the selection of a different year and updates the Redux store.
   * @param {Object} event - The event object from the select input.
   */
  const handleSelectYear = (event) => {
    dispatch(dateActions.setSelectedYear(event.target.value));
  };

  return (
    <select
      name="year"
      className="bg-sections-bg-1 text-elements-color-main p-1 pl-8 pr-8 rounded-full outline-none max-lg:bg-sections-bg-2"
      onChange={handleSelectYear}
      defaultValue={currentYear}
    >
      <option value={currentYear + 1}>{currentYear + 1}</option>
      <option value={currentYear}>{currentYear}</option>
      <option value={currentYear - 1}>{currentYear - 1}</option>
      <option value={currentYear - 2}>{currentYear - 2}</option>
    </select>
  );
}

export default YearsNavigation;
