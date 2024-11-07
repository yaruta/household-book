import { useState } from "react";

function FormInput(props) {
  const { label, id, isError, errorMessage, ...inputProps } = props;
  const [blured, setBlured] = useState(false);

  function handleBlur() {
    setBlured(true);
  }

  return (
    <div className="flex-col">
      <div className="flex">
        <label htmlFor={id} className="text-elements-color-main p-2 min-w-32">
          {label}
        </label>
        <input
          id={id}
          {...inputProps}
          onBlur={handleBlur}
          className="p-2 bg-sections-bg-2 text-elements-color-main"
        />
      </div>
      <span className={blured && isError ? "text-red-500" : "hidden"}>
        {errorMessage}
      </span>
    </div>
  );
}

export default FormInput;
