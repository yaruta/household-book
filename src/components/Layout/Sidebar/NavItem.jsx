import { NavLink } from "react-router-dom";

function NavItem({ path, children }) {

  const itemsClasses = "flex justify-start items-center gap-4 p-2 text-white";

  return (
    <li className="mb-4">
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive
            ? `${itemsClasses} bg-gray-900 rounded-lg`
            : itemsClasses
        }
      >
        {children}
      </NavLink>
    </li>
  );
}

export default NavItem;
