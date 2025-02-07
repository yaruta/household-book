/**
 * TablesNavigation component.
 * This component renders the navigation for the tables section, allowing users to
 * select a specific month and year. It automatically navigates to the current month
 * upon mounting.
 * @module TablesNavigation
 * @returns {JSX.Element} The tables navigation component.
 */

import { useEffect } from "react";
import Section from "../../UI/Section";
import MonthsNavigation from "./MonthsNavigation";
import YearsNavigation from "./YearsNavigation";
import { useNavigate } from "react-router-dom";

function TablesNavigation() {
  const navigate = useNavigate();

  const currentMonth = new Date().toLocaleDateString("en-US", {
    month: "short",
  });

  useEffect(() => {
    navigate(`/tables/${currentMonth}`);
  }, []);

  return (
    <Section className="flex justify-between items-center pl-8 pr-8 pt-2 pb-2 mt-16 max-lg:flex-col max-lg:items-center max-lg:gap-4">
      <MonthsNavigation />
      <YearsNavigation />
    </Section>
  );
}

export default TablesNavigation;
