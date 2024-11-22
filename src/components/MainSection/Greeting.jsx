import { useSelector } from "react-redux";

import UserAvatar from "../UI/UserAvatar";
import DefaultAvatar from "../UI/DefaultAvatar";

function Greeting() {
  const { isImageAvailable, userName } = useSelector((state) => state.user);

  return (
    <div className="w-30 flex justify-start items-center gap-6">
      {isImageAvailable && <UserAvatar size="middle" />}
      {!isImageAvailable && <DefaultAvatar size="middle" />}
      <div className="text-elements-color-main">
        <h2 className="text-2xl">Welcome back</h2>
        <h1 className="text-4xl capitalize">{`${userName.firstName} ${userName.lastName}`}</h1>
      </div>
    </div>
  );
}

export default Greeting;
