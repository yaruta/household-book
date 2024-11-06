import mainPageImage from "../../assets/image-for-main-page.png";
import Balance from "./Balance";
import Greeting from "./Greeting";
import Section from "../UI/Section";

function MainSection() {
  return (
    <Section className="flex justify-between items-start gap-8 p-8 mt-16">
      <article className="h-8 w-100 flex-col">
        <Greeting />
        <Balance />
      </article>
      <img
        src={mainPageImage}
        alt="a women is sitting at a computer"
        className="w-60 h-60"
      />
    </Section>
  );
}

export default MainSection;
