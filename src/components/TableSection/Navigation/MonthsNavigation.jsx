import MonthItem from "./MonthItem";

function MonthsNavigation() {
  return (
    <nav>
      <ul className="flex justify-between items-center gap-8">
        <MonthItem title="Jan" path="/tables/jan" />
        <MonthItem title="Feb" path="/tables/feb" />
        <MonthItem title="Mar" path="/tables/mar" />
        <MonthItem title="Apr" path="/tables/apr" />
        <MonthItem title="May" path="/tables/may" />
        <MonthItem title="Jun" path="/tables/jun" />
        <MonthItem title="Jul" path="/tables/jul" />
        <MonthItem title="Aug" path="/tables/aug" />
        <MonthItem title="Sep" path="/tables/sep" />
        <MonthItem title="Oct" path="/tables/oct" />
        <MonthItem title="Nov" path="/tables/nov" />
        <MonthItem title="Dec" path="/tables/dec" />
      </ul>
    </nav>
  );
}

export default MonthsNavigation;
