import BalanceItem from "../MainSection/BalanceItem";

function MonthlyBalance() {
  return (
    <article className="flex justify-start items-start gap-12 p-8 w-50%">
      <BalanceItem amount="3.0k" type="Balance" />
      <BalanceItem amount="5.4k" type="Income" />
      <BalanceItem amount="2.4k" type="Expenses" />
    </article>
  );
}

export default MonthlyBalance;
