/**
 * BarTypeChart component.
 * This component renders a bar chart using the Recharts library.
 * It dynamically maps data keys to different colors and visualizes revenue and expenses.
 * @module BarTypeChart
 * @param {Object} props - The component props.
 * @param {Array} props.data - The dataset for the chart.
 * @param {Array} props.dataKeys - The keys representing different data categories (e.g., revenue, expenses).
 * @returns {JSX.Element} The bar chart component.
*/

import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";
import LinearGradient from "../UI/LinearGradient";

function BarTypeChart({ data, dataKeys }) {
  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <BarChart width={500} height={500} data={data}>
        <defs>
          <LinearGradient />
        </defs>
        <XAxis dataKey="name" />
        <YAxis type="number" domain={[0, 6000]} />
        <CartesianGrid
          strokeDasharray="4 4"
          strokeOpacity={0.2}
        ></CartesianGrid>
        {dataKeys.map((dataKey) => (
          <Bar
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
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarTypeChart;
