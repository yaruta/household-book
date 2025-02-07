/**
 * RootTables component.
 * This component serves as the root layout for the tables section,
 * including the tables navigation and rendering nested routes via Outlet.
 * @module RootTables
 * @returns {JSX.Element} The root tables layout component.
*/

import { Outlet } from "react-router-dom";
import TablesNavigation from "../components/TableSection/Navigation/TablesNavigation";

function RootTables() {
  return (
    <>
      <TablesNavigation />
      <Outlet />
    </>
  );
}

export default RootTables;
