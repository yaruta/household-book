import BalanceItem from "./BalanceItem";

function Balance() {
    
  return (
    <div className="flex justify-between items-start mt-20">
      <BalanceItem amount="65.4k" type="Balance" />
      <BalanceItem amount="5.4k" type="Income" />
      <BalanceItem amount="2.4k" type="Expenses" />
    </div>
  );
}

export default Balance;
