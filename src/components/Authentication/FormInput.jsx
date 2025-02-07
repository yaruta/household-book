/**
 * FormInput component.
 * This component renders an input field with a label and an optional error message.
 * It tracks whether the input has been blurred to determine when to display validation errors.
 * @module FormInput
 * @param {Object} props - The component props.
 * @param {string} props.label - The label text for the input field.
 * @param {string} props.id - The unique identifier for the input field.
 * @param {boolean} props.isError - Indicates whether the input has a validation error.
 * @param {string} props.errorMessage - The error message to display if validation fails.
 * @returns {JSX.Element} The form input component.
*/

import { useState } from "react";

function FormInput(props) {
  const { label, id, isError, errorMessage, ...inputProps } = props;
  const [blured, setBlured] = useState(false);

  /**
   * Handles the blur event by marking the input as blurred.
   */
  function handleBlur() {
    setBlured(true);
  }

  return (
    <div className="flex-col w-full">
      <div className="flex justify-start w-full max-sm:flex-col max-sm:items-start">
        <label htmlFor={id} className="text-elements-color-main p-2 min-w-24">
          {label}
        </label>
        <input
          id={id}
          {...inputProps}
          onBlur={handleBlur}
          className="p-2 bg-sections-bg-2 text-elements-color-main w-72 max-xl:w-64 max-lg:w-full"
        />
      </div>
      <span
        className={blured && isError ? "text-red-400 text-xs" : "hidden"}
      >
        {errorMessage}
      </span>
    </div>
  );
}

export default FormInput;
