import { Outlet } from "react-router-dom";
import StatisticsNavigation from "../components/Statistics/Navigation/StatisticsNavigation";

function RootDashboard() {
  return (
    <>
      <StatisticsNavigation />
      <Outlet />
    </>
  );
}

export default RootDashboard;
