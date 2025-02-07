/**
 * FormInputItem component.
 * This component renders a form input field with different styles depending on the input type.
 * It includes error handling, dynamic label styling, and supports radio buttons and text inputs.
 * @module FormInputItem
 * @param {Object} props - The component props.
 * @param {string} props.label - The label text for the input field.
 * @param {string} props.id - The unique identifier for the input.
 * @param {string} props.type - The type of input (text, radio, etc.).
 * @param {boolean} props.isError - Indicates if there is a validation error.
 * @param {string} props.errorMessage - The error message to display if validation fails.
 * @returns {JSX.Element} The form input item component.
 */

import { useState } from "react";

function FormInputItem(props) {
  const { label, id, type, isError, errorMessage, ...inputProps } = props;
  const [blured, setBlured] = useState(false);

  let inputClasses = "";
  let labelClasses = "";
  let spanClasses = "pl-8";

  if (id === "title" || id === "amount") {
    labelClasses = "rounded-tl-full rounded-bl-full";
  } else if (type === "radio") {
    inputClasses = "hidden";
    if (id === "expenses") {
      labelClasses =
        "bg-gradient-to-b from-red-200 to-pink-200 has-[:checked]:from-red-500 has-[:checked]:to-pink-500 rounded-tr-full rounded-br-full";
      spanClasses = "text-center";
    } else if (id === "revenue") {
      labelClasses =
        "bg-gradient-to-b from-cyan-200 to-green-200 has-[:checked]:from-cyan-500 has-[:checked]:to-green-500";
      spanClasses = "text-center";
    }
  } else if (id === "date") {
    inputClasses = "rounded-tr-full rounded-br-full";
    labelClasses = "rounded-tr-full rounded-br-full";
  }

  /**
   * Handles the blur event and triggers validation display.
   */
  function handleBlur() {
    setBlured(true);
  }

  return (
    <div className="flex-col w-full">
      <label
        htmlFor={id}
        className={`flex w-full justify-center items-center text-elements-color-main border-[1px] border-border-color ${labelClasses}`}
      >
        <span className={`max-w-36 grow p-2 ${spanClasses}`}>{label}</span>
        <input
          id={id}
          type={type}
          {...inputProps}
          onBlur={handleBlur}
          className={`bg-sections-bg-2 outline-none p-2 text-elements-color-main placeholder-gray-400 grow  ${
            isError && isError ? "border-[1px] border-red-500" : ""
          } ${inputClasses}`}
        />
      </label>
      <div
        className={
          blured && isError
            ? "text-red-400 text-xs text-end pt-[3px]"
            : "hidden"
        }
      >
        {errorMessage}
      </div>
    </div>
  );
}

export default FormInputItem;
