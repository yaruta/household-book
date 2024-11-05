import DefaultAvatar from "../../UI/DefaultAvatar";
import UserPhotoIcon from "../../UI/UserAvatar";

function Header() {
  let userPhoto = null;
  return (
    <header className="w-full flex items-center justify-between p-5 pl-12 pr-12">
      <button className="text-white">
        <span className="text-4xl">≡</span>
      </button>
      {userPhoto && (
          <UserPhotoIcon image={userPhoto} />
      )}
      {!userPhoto && (
        <DefaultAvatar isSmall/>
      )}
    </header>
  );
}

export default Header;
