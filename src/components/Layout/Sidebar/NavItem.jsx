/**
 * NavItem component.
 * This component renders a navigation link item using React Router's NavLink.
 * It highlights the active link and allows nested elements (icons and text).
 * @param {Object} props - The component props.
 * @param {string} props.path - The navigation path.
 * @param {React.ReactNode} props.children - The content inside the navigation item.
 * @returns {JSX.Element} The navigation item component.
*/

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
