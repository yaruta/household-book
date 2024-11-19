import { useDispatch, useSelector } from "react-redux";
import { dateActions } from "../../../store/date-slice";

function YearsNavigation() {
  const currentYear = new Date().getFullYear();
  const dispatch = useDispatch();

  const handleSelectYear = (event) => {
    dispatch(dateActions.setSelectedYear(event.target.value));
  };

  return (
    <select
      name="year"
      className="bg-sections-bg-1 text-elements-color-main p-1 pl-8 pr-8 rounded-full outline-none"
      onChange={handleSelectYear}
      defaultValue={currentYear}
    >
      <option value={currentYear + 1}>{currentYear + 1}</option>
      <option value={currentYear}>{currentYear}</option>
      <option value={currentYear - 1}>{currentYear - 1}</option>
      <option value={currentYear - 2}>{currentYear - 2}</option>
    </select>
  );
}

export default YearsNavigation;
