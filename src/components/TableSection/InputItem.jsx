import { removeItem, queryClient } from "../../util/http";
import { useMutation } from "@tanstack/react-query";
import EditIcon from "../Icons/EditIcon";
import RemoveIcon from "../Icons/RemoveIcon";

function InputItem({ id, date, title, type, amount, userId }) {
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: removeItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tables"] });
    },
  });

  const handleDelete = () => {
    mutate({ userId, id });
  };

  return (
    <>
      {isPending && <p>Removing...</p>}
      {isError && <p>{error}</p>}
      <li className="text-elements-color-main bg-gradient-to-b from-sections-bg-2 to-sections-bg-2/70 p-4 rounded-3xl mb-4">
        <div className="flex justify-between">
          <div className="text-gray-500">{date}</div>
          <div className="w-20 flex justify-end gap-4">
            <EditIcon />
            <button onClick={handleDelete}>
              <RemoveIcon />
            </button>
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
          >{`${parseFloat(amount).toFixed(2).replace(".", ",")} €`}</div>
        </div>
      </li>
    </>
  );
}

export default InputItem;
