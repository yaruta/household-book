import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { statisticsActions } from "../../../store/statistics-slice";

function TypeItem({ title, path }) {
  const dispatch = useDispatch();

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
