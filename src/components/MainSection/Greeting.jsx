/**
 * Greeting component.
 * This component displays a welcome message with the user's name and avatar.
 * It dynamically renders either the user's uploaded avatar or a default one.
 * @module Greeting
 * @returns {JSX.Element} The greeting component.
 */

import { useSelector } from "react-redux";
import UserAvatar from "../UI/UserAvatar";
import DefaultAvatar from "../UI/DefaultAvatar";

function Greeting() {
  const { isImageAvailable, userName } = useSelector((state) => state.user);

  return (
    <div className="w-30 flex justify-start items-center gap-6 max-sm:flex-col max-sm:justify-center max-sm:w-full">
      {isImageAvailable && <UserAvatar size="middle" />}
      {!isImageAvailable && <DefaultAvatar size="middle" />}
      <div className="text-elements-color-main">
        <h2 className="text-2xl max-md:hidden">Welcome </h2>
        <h1 className="text-4xl capitalize max-md:text-3xl">{`${userName.firstName} ${userName.lastName}`}</h1>
      </div>
    </div>
  );
}

export default Greeting;
