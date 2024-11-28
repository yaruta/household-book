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
