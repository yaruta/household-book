/**
 * UserFormInput component.
 * This component renders a labeled input field for user information.
 * If isEdit is true, it displays an editable text input; otherwise, it shows static text.
 * @module UserFormInput
 * @param {Object} props - The component props.
 * @param {string} props.label - The label for the input field.
 * @param {string} props.id - The ID and name of the input field.
 * @param {boolean} props.isEdit - Determines if the input should be editable.
 * @param {string} props.value - The current value to display or edit.
 * @returns {JSX.Element} The user form input component.
 */

import UserFormLine from "./UserFormLine";

function UserFormInput({ label, id, isEdit, value, ...props }) {
  return (
    <UserFormLine>
      <label htmlFor={id} className="w-20 h-8 pt-[2px]">
        {label}
      </label>
      {isEdit && (
        <input
          type="text"
          id={id}
          name={id}
          className="w-2/4 h-8 bg-bg-secondary-color"
          defaultValue={value !== "Unknown" ? value : ""}
          {...props}
        />
      )}
      {!isEdit && <p className="w-2/4 h-8 pt-[2px] capitalize">{value}</p>}
    </UserFormLine>
  );
}

export default UserFormInput;
