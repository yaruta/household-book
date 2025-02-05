/**
 * MainNavigation component.
 * This component renders the main navigation menu, displaying links to various sections
 * of the application when the user is logged in. It also includes a logout button.
 * @returns {JSX.Element} The main navigation component.
 */

import { useNavigate } from "react-router-dom";
import NavItem from "./NavItem";
import HomeIcon from "../../Icons/HomeIcon";
import DashboardIcon from "../../Icons/DashboardIcon";
import TablesIcon from "../../Icons/TablesIcon";
import UserIcon from "../../Icons/UserIcon";
import LogoutIcon from "../../Icons/LogoutIcon";
import { doSignOut } from "../../../firebase/auth";
import { useAuth } from "../../../store/authContext";
import { useDispatch } from "react-redux";
import { userActions } from "../../../store/user-slice";

function MainNavigation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userLoggedIn } = useAuth();

  /**
   * Handles user logout by signing out, removing the user ID from Redux state,
   * and navigating back to the login page.
   */
  function handleLogout() {
    doSignOut();
    dispatch(userActions.removeUserId());
    navigate("/auth?mode=login");
  }

  return (
    <nav className="mt-20 pt-2">
      {userLoggedIn && (
        <ul>
          <NavItem path="/">
            <HomeIcon />
            <span>Main</span>
          </NavItem>
          <NavItem path={`/tables`}>
            <TablesIcon />
            <span>Tables</span>
          </NavItem>
          <NavItem path="/dashboard">
            <DashboardIcon />
            <span>Dashboard</span>
          </NavItem>
          <NavItem path="/user">
            <UserIcon />
            <span>User Profile</span>
          </NavItem>

          <button
            onClick={handleLogout}
            className="text-pink-700 flex items-center gap-2 p-2"
          >
            <LogoutIcon />
            <span>Logout</span>
          </button>
        </ul>
      )}
    </nav>
  );
}

export default MainNavigation;
