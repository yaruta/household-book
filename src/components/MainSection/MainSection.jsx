/**
 * MainSection component.
 * This component serves as the main content section of the homepage.
 * It displays a greeting, balance overview, and an illustration.
 * It also fetches and updates financial data when available.
 * @module MainSection
 * @returns {JSX.Element} The main section component.
 */

import mainPageImage from "../../assets/image-for-main-page.png";
import { useSelector, useDispatch } from "react-redux";
import { fetchTables } from "../../util/http";
import { useQuery } from "@tanstack/react-query";
import { balanceActions } from "../../store/balance-slice";
import Balance from "./Balance";
import Greeting from "./Greeting";
import Section from "../UI/Section";
import { useEffect } from "react";

function MainSection() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.userId);

  // Fetches financial data using React Query
  const { data } = useQuery({
    queryKey: ["tables"],
    queryFn: ({ signal }) => fetchTables({ userId, signal }),
    staleTime: 5000,
  });

  useEffect(() => {
    if (data) {
      // Resets balance before recalculating
      dispatch(balanceActions.clearBalance());
      // Updates balance state
      dispatch(balanceActions.calculateBalance(Object.values(data)));
    }
  }, [data]);

  return (
    <Section className="flex justify-between items-start gap-8 p-8 mt-16">
      <article className="w-100 flex-col max-sm:w-full">
        <Greeting />
        <Balance />
      </article>
      <img
        src={mainPageImage}
        alt="a women is sitting at a computer"
        className="w-60 h-60 max-lg:hidden"
      />
    </Section>
  );
}

export default MainSection;
