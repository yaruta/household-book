/**
 * TypeItem component.
 * This component renders a navigation link for selecting a statistics type (week, month, or year).
 * It updates the Redux store when a type is selected and highlights the active selection.
 * @module TypeItem
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the statistics type.
 * @param {string} props.path - The navigation path for the statistics type.
 * @returns {JSX.Element} The type item component.
 */

import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { statisticsActions } from "../../../store/statistics-slice";

function TypeItem({ title, path }) {
  const dispatch = useDispatch();

  /**
   * Updates the statistics type in the Redux store when a type is selected.
   */
  const handleActive = () => {
    dispatch(statisticsActions.setStatisticsType({type: title}));
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

export default TypeItem;
