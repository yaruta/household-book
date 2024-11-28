import { fetchTable } from "../../util/http";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import InputItem from "./InputItem";
import Section from "../UI/Section";
import { balanceActions } from "../../store/balance-slice";
import { useEffect } from "react";

function MonthlyTable() {
  const userId = useSelector((state) => state.user.userId);
  const { year, month } = useSelector((state) => state.date);
  const selectedDate = `${year}${month}`;
  const dispatch = useDispatch();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["tables", selectedDate],
    queryFn: ({ signal }) => fetchTable({ userId, signal, selectedDate }),
    staleTime: 5000,
  });

  useEffect(() => {
    if (data && !isError) {
      dispatch(balanceActions.clearBalance());
      dispatch(balanceActions.calculateMonthlyBalance(Object.values(data)));
    } else {
      dispatch(balanceActions.clearBalance());
    }
  }, [data]);

  let content = <p className="text-gray-500">No items added</p>;

  if (isPending) {
    content = <p className="text-elements-color-main">Loading...</p>;
  }

  if (isError) {
    content = (
      <p className="text-elements-color-main">{error || "An error occured!"}</p>
    );
  }

  if (data && !isError) {
    content = Object.values(data).map((item) => (
      <InputItem
        key={item.id}
        id={item.id}
        date={item.date}
        title={item.title}
        type={item.type}
        amount={item.amount}
        userId={userId}
      />
    ));
  }

  return (
    <Section className="p-8 mt-8">
      <ul className="p-0">{content}</ul>
    </Section>
  );
}

export default MonthlyTable;
