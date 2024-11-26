import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { fetchTables } from "../../util/http";

import Section from "../UI/Section";
import AreaTypeChart from "./AreaTypeChart";
import BarTypeChart from "./BarTypeChart";
import { statisticsActions } from "../../store/statistics-slice";
import { useEffect } from "react";

function StatisticsSection() {
  const userId = useSelector((state) => state.user.userId);
  const tablesData = useSelector((state) => state.statistics.value);
  const dispatch = useDispatch();

  const { data, isError } = useQuery({
    queryKey: ["tables"],
    queryFn: ({ signal }) => fetchTables({ userId, signal }),
    staleTime: 5000,
  });

  useEffect(() => {
    if (data && !isError) {
      dispatch(statisticsActions.clearBalance());
      Object.values(data).map((month, index) => {
        const date = Object.keys(data)[index];
        Object.values(month).map((item) => {
          dispatch(statisticsActions.setBalance({ date, item }));
        });
      });
    }
  }, [data]);

  return (
    <div className="flex justify-between items-center gap-2">
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
