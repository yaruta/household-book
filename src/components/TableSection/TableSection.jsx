/**
 * TableSection component.
 * This component renders the table section, including balance display,
 * a button to add new items, and a monthly table of financial entries.
 * It manages UI state for showing or hiding the new item form.
 * @returns {JSX.Element} The table section component.
 */

import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import Section from "../UI/Section";
import MonthlyTable from "./MonthlyTable";
import Button from "../UI/Button";
import NewItemForm from "./InputForm/NewItemForm";
import Balance from "../MainSection/Balance";

function TableSection() {
  const dispatch = useDispatch();
  const { formIsVisible } = useSelector((state) => state.ui);

  /**
   * Toggles the visibility of the new item form.
   */
  function handleToggleForm() {
    dispatch(uiActions.toggleForm());
  }

  return (
    <>
      {formIsVisible && <NewItemForm />}
      <Section className="flex justify-between items-center gap-12 mt-8 max-lg:gap-8">
        <Balance />
        <div className="w-50% flex justify-center items-center mr-8">
          <Button onClick={handleToggleForm}>Add new item</Button>
        </div>
      </Section>

      <MonthlyTable />
    </>
  );
}

export default TableSection;
