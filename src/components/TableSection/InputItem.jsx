import EditIcon from "../Icons/EditIcon";
import RemoveIcon from "../Icons/RemoveIcon";

function InputItem({ date, title, type, amount }) {
  return (
    <li className="text-elements-color-main bg-gradient-to-b from-sections-bg-2 to-sections-bg-2/70 p-4 rounded-3xl mb-4">
    {/* <div
      className={
        type === "expenses"
          ? "bg-gradient-to-b from-pink-500 to-red-500 p-[1px] w-90% h-15 rounded-[30px] mb-4"
          : "bg-gradient-to-b from-cyan-500 to-green-500 p-[1px] w-90% h-15 rounded-[30px] mb-4"
      }
    >
      <li className="text-elements-color-main bg-gradient-to-r from-sections-bg-1 to-sections-bg-2 p-4 pl-8 pr-8 rounded-[30px]  h-full w-full"> */}
        <div className="flex justify-between">
          <div className="text-gray-500">{date}</div>
          <div className="w-20 flex justify-end gap-4">
            <EditIcon />
            <RemoveIcon />
          </div>
        </div>
        <div className="flex justify-between pt-1">
          <div>{title}</div>
          <div
            className={
              type === "expenses"
                ? "text-transparent bg-clip-text bg-gradient-to-b from-pink-500 to-red-500"
                : "text-transparent bg-clip-text bg-gradient-to-b from-cyan-500 to-green-500"
            }
          >{`${amount} €`}</div>
        </div>
      </li>
    // </div>
  );
}

export default InputItem;
