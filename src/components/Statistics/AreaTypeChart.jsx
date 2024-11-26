import {
  Area,
  AreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import LinearGradient from "../UI/LinearGradient";

function AreaTypeChart({ data, dataKeys }) {
  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <AreaChart width={500} height={500} data={data}>
        <defs>
          <LinearGradient />
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid
          strokeDasharray="4 4"
          strokeOpacity={0.2}
        ></CartesianGrid>
        {dataKeys.map((dataKey) => (
          <Area
            key={dataKey}
            dataKey={dataKey}
            type="monotone"
            stroke={
              dataKey === "revenue"
                ? "rgb(0, 182, 189)"
                : dataKey === "expenses"
                ? "rgb(255, 80, 103)"
                : "rgba(136,132,216,0.6)"
            }
            fill={`url(#color-${dataKey})`}
          />
        ))}
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default AreaTypeChart;
