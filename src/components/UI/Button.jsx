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
