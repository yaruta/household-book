import Section from "../../UI/Section";
import MonthsNavigation from "./MonthsNavigation";
import YearsNavigation from "./YearsNavigation";

function TablesNavigation() {
  return (
    <Section className="flex justify-between items-center pl-8 pr-8 pt-2 pb-2 mt-16">
      <MonthsNavigation />
      <YearsNavigation />
    </Section>
  );
}

export default TablesNavigation;
