import { useLocation, useParams } from "react-router-dom";
import InputItem from "./InputItem";
import Section from "../UI/Section";

function MonthlyTable() {
  const { pathname } = useLocation();

  return (
    <Section className="p-8 mt-8">
      <ul className="p-0">
        <InputItem
          date="14.05.24"
          title="Salary"
          type="income"
          amount="3445,00"
        />
        <InputItem
          date="17.05.24"
          title="Grocery"
          type="expenses"
          amount="45,00"
        />
        <InputItem date="21.05.24" title="Post" type="expenses" amount="5,40" />
        <InputItem
          date="25.05.24"
          title="Print"
          type="expenses"
          amount="15,00"
        />
      </ul>
    </Section>
  );
}

export default MonthlyTable;
