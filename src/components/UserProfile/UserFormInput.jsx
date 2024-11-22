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
