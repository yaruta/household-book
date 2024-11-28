import { useState } from "react";

function FormInput(props) {
  const { label, id, isError, errorMessage, ...inputProps } = props;
  const [blured, setBlured] = useState(false);

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
