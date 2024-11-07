import { useNavigate } from "react-router-dom";
import NavItem from "./NavItem";
import HomeIcon from "../../Icons/HomeIcon";
import DashboardIcon from "../../Icons/DashboardIcon";
import TablesIcon from "../../Icons/TablesIcon";
import UserIcon from "../../Icons/UserIcon";
import LogoutIcon from "../../Icons/LogoutIcon";
import { doSignOut } from "../../../firebase/auth";
import { useAuth } from "../../../store/authContext";

function MainNavigation() {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  function handleLogout() {
    doSignOut();
    navigate("/auth?mode=login");
  }

  return (
    <nav className="mt-20 pt-2">
      <ul>
        <NavItem path="/">
          <HomeIcon />
          <span>Main</span>
        </NavItem>
        <NavItem path="/tables/may">
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
        {userLoggedIn && (
          <button
            onClick={handleLogout}
            className="text-pink-700 flex items-center gap-2 p-2"
          >
            <LogoutIcon />
            <span>Logout</span>
          </button>
        )}
      </ul>
    </nav>
  );
}

export default MainNavigation;
