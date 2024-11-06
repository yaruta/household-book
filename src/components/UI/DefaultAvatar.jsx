import AvatarIcon from "../Icons/AvatarIcon";

function DefaultAvatar({ isSmall }) {
  let smallAvatarClasses = "w-10 h-10 bg-elements-color-main rounded-full p-[2px] flex justify-center items-center";
  let bigAvatarClasses =
    "w-16 h-16 flex justify-center items-center bg-gradient-to-br rounded-full from-purplec via-redc to-yellowc p-[3px]";

  return (
    <div className={isSmall ? smallAvatarClasses : bigAvatarClasses}>
        <AvatarIcon size={isSmall ? 52 : 96}/>
    </div>
  );
}

export default DefaultAvatar;
