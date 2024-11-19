import { useSelector } from "react-redux";
import BalanceItem from "./BalanceItem";
import { useLocation } from "react-router-dom";

function Balance() {
  const balance = useSelector((state) => state.balance);
  
  const { pathname } = useLocation();
  let cssClasses = "flex justify-between items-start mt-20";

  if (pathname.startsWith("/tables")) {
    cssClasses = "flex justify-start items-start gap-12 p-8 w-50%";
  }

  return (
    <article className={cssClasses}>
      <BalanceItem amount={balance.balance} type="Balance" />
      <BalanceItem amount={balance.income} type="Income" />
      <BalanceItem amount={balance.expenses} type="Expenses" />
    </article>
  );
}

export default Balance;
