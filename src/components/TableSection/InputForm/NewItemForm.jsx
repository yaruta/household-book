import Modal from "../../UI/Modal";
import FormLine from "./FormLine";
import Button from "../../UI/Button";
import FormInputItem from "./FormInputItem";
import { useDispatch } from "react-redux";
import { uiActions } from "../../../store/ui-slice";

function NewItemForm() {
  const dispatch = useDispatch();

  function handleClose() {
    dispatch(uiActions.toggleForm());
  }

  return (
    <Modal open onClose={handleClose}>
      <h2 className="w-40 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 text-2xl uppercase">
        New item
      </h2>
      <form className="w-full flex-col">
        <FormLine>
          <FormInputItem
            label="Titel:"
            id="title"
            type="text"
            name="title"
            placeholder="z.B.Salary"
          />
          <FormInputItem
            label="Income"
            id="revenue"
            type="radio"
            name="type"
            value="revenue"
          />
          <FormInputItem
            label="Expenses"
            id="expenses"
            type="radio"
            name="type"
            value="expenses"
            defaultChecked
          />
        </FormLine>

        <FormLine>
          <FormInputItem
            label="Amount:"
            id="amount"
            type="text"
            name="amount"
            placeholder="z.B. 50,85"
          />
          <FormInputItem
            label="Date:"
            id="date"
            type="date"
            name="date"
            placeholder="yyyy-mm-dd"
            defaultValue={new Date().toISOString().substring(0, 10)}
          />
        </FormLine>

        <FormLine className="justify-end gap-8">
          <Button type="secondary">Close</Button>
          <Button>Add Item</Button>
        </FormLine>
      </form>
    </Modal>
  );
}

export default NewItemForm;
