import Section from "../UI/Section";
import MonthlyBalance from "./MontlyBalance";
import MonthlyTable from "./MonthlyTable";
import Button from "../UI/Button";
import NewItemForm from "./InputForm/NewItemForm";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";

function TableSection() {
  const dispatch = useDispatch();
  const { formIsVisible } = useSelector((state) => state.ui);

  function handleToggleForm() {
    dispatch(uiActions.toggleForm());
  }

  return (
    <>
      {formIsVisible && <NewItemForm />}
      <Section className="flex justify-between items-center gap-12 mt-8">
        <MonthlyBalance />
        <div className="w-50% flex justify-center items-center mr-8">
          <Button onClick={handleToggleForm}>Add new item</Button>
        </div>
      </Section>

      <MonthlyTable />
    </>
  );
}

export default TableSection;
