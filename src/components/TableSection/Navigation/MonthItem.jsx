import { NavLink } from "react-router-dom";

function MonthItem({ title, path }) {
  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive
            ? "text-logo-color"
            : "text-elements-color-main"
        }
      >
        {title}
      </NavLink>
    </li>
  );
}

export default MonthItem;
