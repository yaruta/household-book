import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../store/ui-slice";
import { isValidItemInput } from "../../../util/validating";

import Modal from "../../UI/Modal";
import FormLine from "./FormLine";
import Button from "../../UI/Button";
import FormInputItem from "./FormInputItem";
import { useMutation } from "@tanstack/react-query";
import { addItem, queryClient } from "../../../util/http";
import { itemActions } from "../../../store/item-slice";

function NewItemForm() {
  const dispatch = useDispatch();
  const editValue = useSelector((state) => state.item.item);
  console.log(editValue);
  const [isError, setIsError] = useState({
    title: "",
    amount: "",
  });

  const {
    mutate,
    isPending,
    isError: isMutationError,
    error,
  } = useMutation({
    mutationFn: addItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tables"] });
    },
  });
  const userId = useSelector((state) => state.user.userId);

  function handleClose() {
    dispatch(itemActions.removeTemporaryItem());
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
      id: editValue ? editValue.id : Math.floor(Math.random() * 1000000000),
      title: event.target.title.value,
      type: event.target.type.value,
      amount: event.target.amount.value,
      date: event.target.date.value,
    };
    mutate({ userId, item });
    handleClose();
  }

  return (
    <Modal open onClose={handleClose}>
      <h2 className="w-40 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 text-2xl uppercase">
        New item
      </h2>
      {isMutationError && <p>{error}</p>}
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
            defaultValue={editValue ? editValue.title : ""}
            required
          />
          <FormInputItem
            label="Income"
            id="revenue"
            type="radio"
            name="type"
            value="revenue"
            defaultChecked={
              (editValue && editValue.type === "revenue") ? true : false
            }
            required
          />
          <FormInputItem
            label="Expenses"
            id="expenses"
            type="radio"
            name="type"
            value="expenses"
            defaultChecked={
              (editValue && editValue.type === "expenses") ? true : editValue ? false : true
            }
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
            defaultValue={editValue ? editValue.amount : ""}
            required
          />
          <FormInputItem
            label="Date:"
            id="date"
            type="date"
            name="date"
            placeholder="yyyy-mm-dd"
            defaultValue={
              editValue
                ? editValue.date
                : new Date().toISOString().substring(0, 10)
            }
            required
          />
        </FormLine>

        <FormLine className="justify-end gap-8">
          <Button styleType="secondary" type="button" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" disabled={isPending}>
            {!isPending ? (editValue ? "Edit Item" : "Add Item") : "Submitting"}
          </Button>
        </FormLine>
      </form>
    </Modal>
  );
}

export default NewItemForm;
