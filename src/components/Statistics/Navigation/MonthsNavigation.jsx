import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { dateActions } from "../../../store/date-slice";

function MonthsNavigation() {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dateActions.setSelectedYear(currentYear));
    dispatch(dateActions.setSelectedMonth(currentMonth));
  }, []);

  const handleSelectMonth = (event) => {
    dispatch(dateActions.setSelectedMonth(event.target.value));
  };

  return (
    <select
      name="month"
      className="bg-sections-bg-1 text-elements-color-main p-1 pl-8 pr-8 rounded-full outline-none"
      onChange={handleSelectMonth}
      defaultValue={currentMonth}
    >
      <option value={1}>January</option>
      <option value={2}>February</option>
      <option value={3}>March</option>
      <option value={4}>April</option>
      <option value={5}>May</option>
      <option value={6}>June</option>
      <option value={7}>July</option>
      <option value={8}>August</option>
      <option value={9}>September</option>
      <option value={10}>October</option>
      <option value={11}>November</option>
      <option value={12}>December</option>
    </select>
  );
}

export default MonthsNavigation;
