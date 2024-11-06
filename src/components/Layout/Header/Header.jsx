import { useDispatch } from "react-redux";
import DefaultAvatar from "../../UI/DefaultAvatar";
import UserPhotoIcon from "../../UI/UserAvatar";
import { uiActions } from "../../../store/ui-slice";

function Header() {
  const dispatch = useDispatch();
  let userPhoto = null;

  function handleToggleSidebar() {
    dispatch(uiActions.toggleSidebar());
  }

  return (
    <header className="w-full flex items-center justify-between p-5 pl-12 pr-12">
      <button className="text-white" onClick={handleToggleSidebar}>
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
