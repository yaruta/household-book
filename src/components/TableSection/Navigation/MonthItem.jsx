import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { dateActions } from "../../../store/date-slice";

function MonthItem({ title, path, index }) {
  const dispatch = useDispatch();

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
