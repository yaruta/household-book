import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Section from "../../UI/Section";
import TypeItem from "./TypeItem";
import YearsNavigation from "../../TableSection/Navigation/YearsNavigation";
import MonthsNavigation from "./MonthsNavigation";
import { statisticsActions } from "../../../store/statistics-slice";
import WeeksNavigation from "./WeeksNavigation";

function StatisticsNavigation() {
  const { type } = useSelector((state) => state.statistics);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(statisticsActions.setStatisticsType({ type: "year" }));
    navigate("/dashboard/year");
  }, []);

  return (
    <Section className="flex justify-between items-center pl-8 pr-8 pt-2 pb-2 mt-16 mb-8">
      <nav>
        <ul className="flex justify-between items-center gap-8">
          <TypeItem title="week" path="/dashboard/week" />
          <TypeItem title="month" path="/dashboard/month" />
          <TypeItem title="year" path="/dashboard/year" />
        </ul>
      </nav>
      {type === "year" && <YearsNavigation />}
      {type === "month" && (
        <nav className="flex justify-end gap-4">
          <MonthsNavigation />
          <YearsNavigation />
        </nav>
      )}
      {type === "week" && <WeeksNavigation />}
    </Section>
  );
}

export default StatisticsNavigation;