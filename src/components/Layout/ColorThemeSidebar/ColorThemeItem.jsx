function ColorThemeItem({ title, isActive, onChoise }) {

  const activeClasses = "w-2 h-2 bg-pink-500 mt-[1px]";

  return (
    <li>
      <button onClick={() => onChoise(title)} className="flex items-center gap-2">
        <span
          className={isActive ? activeClasses : "w-2 h-2 bg-gray-500 mt-[1px]"}
        ></span>
        <span className={isActive ? "text-pink-500" : "text-elements-color-main"}>
          {title}
        </span>
      </button>
    </li>
  );
}

export default ColorThemeItem;
