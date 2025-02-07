/**
 * RootDashboard component.
 * This component serves as the root layout for the dashboard section,
 * including the statistics navigation and rendering nested routes via Outlet.
 * @module RootDashboard
 * @returns {JSX.Element} The root dashboard layout component.
*/

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
