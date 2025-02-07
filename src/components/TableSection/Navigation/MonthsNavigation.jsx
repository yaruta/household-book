/**
 * MonthsNavigation component.
 * This component renders a navigation menu for selecting a month.
 * It uses the MonthItem component to generate links for each month.
 * @module MonthsNavigation
 * @returns {JSX.Element} The months navigation component.
 */

import MonthItem from "./MonthItem";

function MonthsNavigation() {
  return (
    <nav>
      <ul className="flex justify-between items-center gap-8 max-xl:gap-4">
        <MonthItem title="Jan" path="/tables/jan" index="01" />
        <MonthItem title="Feb" path="/tables/feb" index="02" />
        <MonthItem title="Mar" path="/tables/mar" index="03" />
        <MonthItem title="Apr" path="/tables/apr" index="04" />
        <MonthItem title="May" path="/tables/may" index="05" />
        <MonthItem title="Jun" path="/tables/jun" index="06" />
        <MonthItem title="Jul" path="/tables/jul" index="07" />
        <MonthItem title="Aug" path="/tables/aug" index="08" />
        <MonthItem title="Sep" path="/tables/sep" index="09" />
        <MonthItem title="Oct" path="/tables/oct" index="10" />
        <MonthItem title="Nov" path="/tables/nov" index="11" />
        <MonthItem title="Dec" path="/tables/dec" index="12" />
      </ul>
    </nav>
  );
}

export default MonthsNavigation;
