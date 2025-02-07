/**
 * ColorThemeItem component.
 * This component renders a selectable color theme option.
 * It highlights the active theme and triggers a callback when clicked.
 * @module ColorThemeIcon
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the color theme.
 * @param {boolean} props.isActive - Indicates whether the theme is currently active.
 * @param {Function} props.onChoise - Callback function triggered when the theme is selected.
 * @returns {JSX.Element} The color theme item component.
 */

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
