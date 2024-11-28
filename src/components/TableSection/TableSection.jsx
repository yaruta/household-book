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
