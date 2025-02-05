/**
 * UserAvatar component.
 * This component displays the user's avatar. If a user image is available,
 * it is shown inside a styled container. Otherwise, a placeholder with a gradient
 * background is displayed. The component also listens to loading states and applies
 * a loading animation when necessary.
 * @param {Object} props - The component props.
 * @param {string} [props.size="big"] - The size of the avatar (small, middle, or big).
 * @returns {JSX.Element} The user avatar component.
 */

import { useSelector } from "react-redux";
import {useLoadUserPhoto} from "../../hooks/load-user-photo";

function UserAvatar({ size = "big" }) {
  useLoadUserPhoto();
  const isLoading = useSelector((state) => state.ui.imageIsLoading);
  const { userImage } = useSelector((state) => state.user);

  let containerClasses =
    "rounded-full flex justify-center items-center bg-gradient-to-br";
  let avatarClasses = "";

  if (size === "small") {
    containerClasses += " w-10 h-10  from-purplec via-redc to-yellowc";
    avatarClasses = "w-8 h-8 rounded-full";
  } else if (size === "middle") {
    containerClasses += " w-16 h-16  from-purplec via-redc to-yellowc ";
    avatarClasses = "w-14 h-14 rounded-full";
  } else {
    containerClasses += " w-44 h-44 from-pink-500 to-purple-500 ";
    avatarClasses = "w-11/12 h-11/12 rounded-full";
  }

  const specialCssClass = "animate-pulse";

  return (
    <article>
      <div
        className={`${containerClasses} ${isLoading ? specialCssClass : ""}`}
      >
        {userImage && (
          <img src={userImage} alt="profile image" className={avatarClasses} />
        )}
      </div>
    </article>
  );
}

export default UserAvatar;
