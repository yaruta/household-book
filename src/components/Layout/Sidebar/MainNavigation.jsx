import NavItem from "./NavItem";
import HomeIcon from "../../Icons/HomeIcon";
import DashboardIcon from "../../Icons/DashboardIcon";
import TablesIcon from "../../Icons/TablesIcon";
import UserIcon from "../../Icons/UserIcon";

function MainNavigation() {
  return (
    <nav className="mt-20 pt-2">
      <ul>
        <NavItem path="/">
          <HomeIcon />
          <span>Main</span>
        </NavItem>
        <NavItem path="/tables">
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
      </ul>
    </nav>
  );
}

export default MainNavigation;
