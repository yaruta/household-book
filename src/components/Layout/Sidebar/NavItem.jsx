import { NavLink } from "react-router-dom";

function NavItem({ path, children }) {

  const itemsClasses = "flex justify-start items-center gap-2 p-2 text-elements-color-main";

  return (
    <li className="mb-4">
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive
            ? `${itemsClasses} bg-sections-bg-2 rounded-lg`
            : itemsClasses
        }
      >
        {children}
      </NavLink>
    </li>
  );
}

export default NavItem;
