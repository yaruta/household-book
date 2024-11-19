import { fetchTable } from "../../util/http";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { filterTable } from "../../util/filter";
import InputItem from "./InputItem";
import Section from "../UI/Section";

function MonthlyTable() {
  const userId = useSelector((state) => state.user.userId);
  const selectedDate = useSelector((state) => state.date);

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["tables"],
    queryFn: ({ signal }) => fetchTable({ userId, signal }),
    staleTime: 5000,
  });

  let selectedData = [];

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
    selectedData = filterTable(data, selectedDate);
  }

  if (selectedData.length > 0) {
    content = selectedData.map((item) => (
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
