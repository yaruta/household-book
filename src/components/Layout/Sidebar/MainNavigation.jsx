import { useSelector } from "react-redux";

import NavItem from "./NavItem";
import HomeIcon from "../../Icons/HomeIcon";
import DashboardIcon from "../../Icons/DashboardIcon";
import TablesIcon from "../../Icons/TablesIcon";
import UserIcon from "../../Icons/UserIcon";

function MainNavigation() {
  const { theme } = useSelector((state) => state.ui);
  return (
    <nav className="mt-20 pt-2">
      <ul>
        <NavItem path="/">
          <HomeIcon color={theme === "dark" ? "white" : "black"} />
          <span>Main</span>
        </NavItem>
        <NavItem path="/tables">
          <TablesIcon color={theme === "dark" ? "white" : "black"} />
          <span>Tables</span>
        </NavItem>
        <NavItem path="/dashboard">
          <DashboardIcon color={theme === "dark" ? "white" : "black"} />
          <span>Dashboard</span>
        </NavItem>
        <NavItem path="/user">
          <UserIcon color={theme === "dark" ? "white" : "black"} />
          <span>User Profile</span>
        </NavItem>
      </ul>
    </nav>
  );
}

export default MainNavigation;
