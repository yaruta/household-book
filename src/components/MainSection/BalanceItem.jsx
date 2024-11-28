function BalanceItem({ amount, type }) {
  let classes = "";

  if (type === "Balance") {
    classes = "from-purple-500 to-pink-500";
  } else if (type === "Income") {
    classes = "from-cyan-500 to-green-500";
  } else {
    classes = "from-pink-500 to-red-500";
  }

  return (
    <div className="text-elements-color-main flex-col self-end max-sm:w-full max-sm:pb-4">
      <p
        className={`text-2xl text-transparent bg-clip-text bg-gradient-to-br from-30% to-90% ${classes} max-sm:text-center`}
      >
        {`${amount / 1000}k`}
      </p>
      <p className="max-sm:text-center">{type}</p>
    </div>
  );
}

export default BalanceItem;
