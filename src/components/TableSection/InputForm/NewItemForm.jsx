import { useState } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../../store/ui-slice";
import { isValidItemInput } from "../../../util/validating";
import { Form } from "react-router-dom";

import Modal from "../../UI/Modal";
import FormLine from "./FormLine";
import Button from "../../UI/Button";
import FormInputItem from "./FormInputItem";

function NewItemForm() {
  const dispatch = useDispatch();
  const [isError, setIsError] = useState({
    title: "",
    amount: "",
  });

  function handleClose() {
    dispatch(uiActions.toggleForm());
  }

  function handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    const isValid = isValidItemInput(value, name);
    if (!isValid) {
      setIsError((prevState) => {
        return { ...prevState, [name]: true };
      });
    } else {
      setIsError((prevState) => {
        return { ...prevState, [name]: false };
      });
    }
  }

  function handleAddItem(event) {
    event.preventDefault();
    const item = {
      title: event.target.title.value,
      type: event.target.type.value,
      amount: event.target.amount.value,
      date: event.target.date.value
    };
    console.log(item);

  }

  return (
    <Modal open onClose={handleClose}>
      <h2 className="w-40 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 text-2xl uppercase">
        New item
      </h2>
      <form id="item-form" className="w-full flex-col" onSubmit={handleAddItem}>
        <FormLine>
          <FormInputItem
            label="Title:"
            id="title"
            type="text"
            name="title"
            placeholder="z.B.Salary"
            onChange={handleChange}
            isError={isError.title}
            errorMessage="Title can not be an empty string"
            required
          />
          <FormInputItem
            label="Income"
            id="revenue"
            type="radio"
            name="type"
            value="revenue"
            required
          />
          <FormInputItem
            label="Expenses"
            id="expenses"
            type="radio"
            name="type"
            value="expenses"
            defaultChecked
            required
          />
        </FormLine>

        <FormLine>
          <FormInputItem
            label="Amount:"
            id="amount"
            type="text"
            name="amount"
            placeholder="z.B. 50,85"
            onChange={handleChange}
            isError={isError.amount}
            errorMessage="Please enter a valid amount"
            required
          />
          <FormInputItem
            label="Date:"
            id="date"
            type="date"
            name="date"
            placeholder="yyyy-mm-dd"
            defaultValue={new Date().toISOString().substring(0, 10)}
            required
          />
        </FormLine>

        <FormLine className="justify-end gap-8">
          <Button styleType="secondary" type="button" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit">
            Add Item
          </Button>
        </FormLine>
      </form>
    </Modal>
  );
}

export default NewItemForm;
