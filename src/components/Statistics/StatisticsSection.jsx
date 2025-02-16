/**
 * StatisticsSection component.
 * This component fetches financial data and calculates statistics based on the selected
 * time period (year, month, or week). It renders both an area chart and a bar chart
 * to visualize the financial data.
 * @module StatisticsSection
 * @returns {JSX.Element} The statistics section component.
 */

import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { fetchTables } from "../../util/http";
import Section from "../UI/Section";
import AreaTypeChart from "./AreaTypeChart";
import BarTypeChart from "./BarTypeChart";
import { statisticsActions } from "../../store/statistics-slice";
import { useEffect } from "react";
import { getWeekNumber } from "../../util/date";

function StatisticsSection() {
  const userId = useSelector((state) => state.user.userId);
  const tablesData = useSelector((state) => state.statistics.value);
  const statisticsType = useSelector((state) => state.statistics.type);
  const { year, month, week } = useSelector((state) => state.date);
  const dispatch = useDispatch();

  const { data, isError } = useQuery({
    queryKey: ["tables"],
    queryFn: ({ signal }) => fetchTables({ userId, signal }),
    staleTime: 5000,
  });

  /**
   * Calculates balance for the selected year.
   */
  const calculateBalanceForYear = () => {
    Object.values(data).map((month, index) => {
      const date = Object.keys(data)[index];
      const itemYear = date.substring(0, 4);
      if (year !== itemYear) {
        return;
      }
      Object.values(month).map((item) => {
        dispatch(statisticsActions.setBalance({ date, item }));
      });
    });
  };

  /**
   * Calculates balance for the selected month.
   */
  const calculateBalanceForMonth = () => {
    Object.values(data).map((monthTable, index) => {
      const itemMonth = Object.keys(data)[index].substring(4, 6);
      const itemYear = Object.keys(data)[index].substring(0, 4);
      if (month.toString() !== itemMonth || year !== itemYear) {
        return;
      }
      Object.values(monthTable).map((item) => {
        dispatch(statisticsActions.setBalance({ month, item }));
      });
    });
  };

  /**
   * Calculates balance for the selected week.
   */
  const calculateBalanceForWeek = () => {
    Object.values(data).map((monthTable) => {
      Object.values(monthTable).map((item) => {
        const itemDate = new Date(item.date);
        const itemWeekNumber = getWeekNumber(itemDate);

        if (itemWeekNumber === week) {
          const weekDay = itemDate.getDay() - 1;
          dispatch(statisticsActions.setBalance({ weekDay, item }));
        }
      });
    });
  };

  useEffect(() => {
    if (data && !isError) {
      dispatch(statisticsActions.clearBalance());
      if (statisticsType === "year") {
        calculateBalanceForYear();
      } else if (statisticsType === "month") {
        calculateBalanceForMonth();
      } else if (statisticsType === "week") {
        calculateBalanceForWeek();
      }
    }
  }, [data, statisticsType, month, year, week]);

  return (
    <div className="flex justify-between items-center gap-2 max-lg:flex-col max-lg:justify-center max-lg:ml-12 max-lg:mr-12">
      <Section className="w-full h-80 p-4">
        <AreaTypeChart data={tablesData} dataKeys={["balance"]} />
      </Section>
      <Section className="w-full h-80 p-4">
        <BarTypeChart data={tablesData} dataKeys={["revenue", "expenses"]} />
      </Section>
    </div>
  );
}

export default StatisticsSection;
