function ColorSchemeItem({ title, isActive }) {
  const activeClasses = "w-2 h-2 bg-white mt-[1px]";
  return (
    <li className="flex items-center gap-2">
      <span
        className={!isActive ? "w-2 h-2 bg-gray-800 mt-[1px]" : activeClasses}
      ></span>
      <span>{title}</span>
    </li>
  );
}

export default ColorSchemeItem;
