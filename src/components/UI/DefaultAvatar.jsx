import AvatarIcon from "../Icons/AvatarIcon";

function DefaultAvatar({ isSmall }) {
  let smallAvatarClasses = "w-10 h-10 bg-white rounded-full p-[2px]";
  let bigAvatarClasses =
    "w-16 h-16 bg-gradient-to-br rounded-full from-purple-500 via-red-500 to-yellow-500 p-[3px]";

  return (
    <div className={isSmall ? smallAvatarClasses : bigAvatarClasses}>
      <div className=" w-full h-full rounded-full bg-gray-900 flex justify-center items-center p-0">
        <AvatarIcon />
      </div>
    </div>
  );
}

export default DefaultAvatar;
