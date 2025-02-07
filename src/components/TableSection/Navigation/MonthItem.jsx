/**
 * MonthItem component.
 * This component renders a navigation link for selecting a month.
 * It updates the Redux store when a month is selected and highlights the active selection.
 * @module MonthItem
 * @param {Object} props - The component props.
 * @param {string} props.title - The name of the month.
 * @param {string} props.path - The navigation path for the selected month.
 * @param {number} props.index - The index representing the selected month (1-12).
 * @returns {JSX.Element} The month item component.
*/

import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { dateActions } from "../../../store/date-slice";

function MonthItem({ title, path, index }) {
  const dispatch = useDispatch();

  /**
   * Updates the selected month in the Redux store.
   */
  const handleActive = () => {
    dispatch(dateActions.setSelectedMonth(index));
  };

  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive ? "text-logo-color" : "text-elements-color-main"
        }
        onClick={handleActive}
      >
        {title}
      </NavLink>
    </li>
  );
}

export default MonthItem;
