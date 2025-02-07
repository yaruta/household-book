/**
 * ColorThemeNav component.
 * This component provides a navigation menu for selecting the application's color theme.
 * It displays theme options and updates the selected theme in the Redux store when clicked.
 * @module ColorThemeNav
 * @returns {JSX.Element} The color theme navigation component.
*/

import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../../store/ui-slice";
import ColorThemeItem from "./ColorThemeItem";

function ColorThemeNav() {
  const selectedTheme = useSelector(state => state.ui.theme);

  const dispatch = useDispatch();

  /**
   * Handles theme selection and updates the Redux store if the selected theme changes.
   * @param {string} theme - The chosen theme ('dark' or 'light').
   */
  function handleThemeClick(theme) {
    if (selectedTheme !== theme) {
      dispatch(uiActions.setTheme(theme));
    } 
  }

  return (
    <aside className="w-10 h-lvh p-2 flex-col bg-gradient-to-b from-sections-bg-2/10 to-sections-bg-1 sticky right-0 top-0">
      <nav className="pt-96 mt-64">
        <ul className="flex gap-8 rotate-[-90deg] text-white">
          <ColorThemeItem title="Dark" isActive={selectedTheme === "dark"} onChoise={handleThemeClick}/>
          <ColorThemeItem title="Light" isActive={selectedTheme === "light"} onChoise={handleThemeClick}/>
        </ul>
      </nav>
    </aside>
  );
}

export default ColorThemeNav;
