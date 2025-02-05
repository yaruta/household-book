/**
 * Button component.
 * This component renders a customizable button with different styles.
 * It supports a main style and a secondary style by default.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content inside the button.
 * @param {string} [props.styleType="main"] - The button style type (main or secondary).
 * @returns {JSX.Element} The styled button component.
 */

function Button({ children, styleType = "main", ...props }) {
  let colorClasses = "";
  if (styleType === "main") {
    colorClasses = "from-purplec to-cyan-500";
  } else {
    colorClasses = "from-gray-500 to-gray-400";
  }

  return (
    <button
      {...props}
      className={`h-10 min-w-32 p-4 flex justify-center items-center outline-none rounded-full bg-gradient-to-r ${colorClasses}`}
    >
      <span className="text-white">{children}</span>
    </button>
  );
}

export default Button;
