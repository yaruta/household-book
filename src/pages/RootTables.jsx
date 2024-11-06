import { Outlet } from "react-router-dom";
import TablesNavigation from "../components/TableSection/Navigation/TablesNavigation";
import Section from "../components/UI/Section";

function RootTables() {
  return (
    <>
      <TablesNavigation />
      <Outlet />
    </>
  );
}

export default RootTables;
