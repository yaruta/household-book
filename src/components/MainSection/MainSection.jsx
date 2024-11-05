import mainPageImage from "../../assets/image-for-main-page.png";
import DefaultAvatar from "../UI/DefaultAvatar";
import UserAvatar from "../UI/UserAvatar";
import Balance from "./Balance";
import Greeting from "./Greeting";

function MainSection() {
  return (
    <section className="flex justify-between items-start gap-8 ml-12 mr-12 mt-16 p-8 rounded-3xl bg-gradient-to-r from-10% from-gray-950 to-90% to-transparent">
      <article className="h-8 w-100 flex-col">
        <Greeting />
        <Balance />
      </article>
      <img
        src={mainPageImage}
        alt="a women is sitting at a computer"
        className="w-60 h-60"
      />
    </section>
  );
}

export default MainSection;
