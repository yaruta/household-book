import UserFormLine from "./UserFormLine";

function UserFormInput({ label, id, isEdit, value = "Unknown" }) {

  return (
    <UserFormLine>
      <label htmlFor={id} className="w-20 h-8 pt-[2px]">
        {label}
      </label>
      {isEdit && <input type="text" id={id} name={id} className="w-2/4 h-8" />}
      {!isEdit && <p className="w-2/4 h-8 pt-[2px]">{value}</p>}
    </UserFormLine>
  );

}

export default UserFormInput;
