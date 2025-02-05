/**
 * LinearGradient component.
 * This component defines reusable SVG linear gradient definitions for charts.
 * It includes gradients for balance, revenue, and expenses with different colors and opacities.
 * These gradients can be used in Recharts components to enhance data visualization.
 * @returns {JSX.Element} SVG linear gradient definitions.
 */

function LinearGradient() {
  return (
    <>
      <linearGradient id="color-balance" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="rgb(136,132,216)" stopOpacity={0.5} />
        <stop offset="95%" stopColor="rgb(66, 186, 255)" stopOpacity={0.05} />
      </linearGradient>
      <linearGradient id="color-revenue" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="rgb(0, 182, 189)" stopOpacity={0.8} />
        <stop offset="95%" stopColor="rgb(0, 182, 189)" stopOpacity={0} />
      </linearGradient>
      <linearGradient id="color-expenses" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="rgb(255, 80, 103)" stopOpacity={0.8} />
        <stop offset="95%" stopColor="rgb(255, 80, 103)" stopOpacity={0} />
      </linearGradient>
    </>
  );
}

export default LinearGradient;
