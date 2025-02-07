/**
 * DefaultAvatar component.
 * This component renders a default user avatar with different size options.
 * It applies a gradient background and includes an AvatarIcon.
 * @module DefaultAvatar
 * @param {Object} props - The component props.
 * @param {string} [props.size="big"] - The size of the avatar (small, middle, or big).
 * @returns {JSX.Element} The default avatar component.
 */

import AvatarIcon from "../Icons/AvatarIcon";

function DefaultAvatar({ size = "big" }) {
  let containerClasses =
    "rounded-full flex justify-center items-center bg-gradient-to-br";
  let iconSize = 60;

  if (size === "small") {
    containerClasses += " w-10 h-10  from-purplec via-redc to-yellowc";
  } else if (size === "middle") {
    containerClasses += " w-16 h-16  from-purplec via-redc to-yellowc ";
    iconSize = 88;
  } else {
    containerClasses += " w-44 h-44 from-pink-500 to-purple-500 ";
    iconSize = 212;
  }

  return (
    <div className={containerClasses}>
      <AvatarIcon size={iconSize} />
    </div>
  );
}

export default DefaultAvatar;
