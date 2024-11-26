import { useSelector } from "react-redux";
import Section from "../../UI/Section";
import TypeItem from "./TypeItem";
import YearsNavigation from "../../TableSection/Navigation/YearsNavigation";

function StatisticsNavigation() {
  const {type} = useSelector(state => state.statistics);
  return (
    <Section className="flex justify-between items-center pl-8 pr-8 pt-2 pb-2 mt-16">
      <nav>
        <ul className="flex justify-between items-center gap-8">
          {/* <TypeItem title="week" path="/dashboard/week" /> */}
          <TypeItem title="month" path="/dashboard/month" />
          <TypeItem title="year" path="/dashboard/year" />
        </ul>
      </nav>
      {type === "year" && <YearsNavigation />}
    </Section>
  );
}

export default StatisticsNavigation;
