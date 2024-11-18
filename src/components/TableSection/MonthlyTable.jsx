import { useLocation } from "react-router-dom";
import InputItem from "./InputItem";
import Section from "../UI/Section";
import { fetchTable } from "../../util/http";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";

function MonthlyTable() {
  // const { pathname } = useLocation();
  const userId = useSelector((state) => state.user.userId);

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["tables"],
    queryFn: ({ signal }) => fetchTable({ userId, signal }),
    staleTime: 5000
  });

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
    const items = Object.values(data);
    content = items.map((item) => (
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
