import { useDispatch } from "react-redux";
import { uiActions } from "../../../store/ui-slice";

import DefaultAvatar from "../../UI/DefaultAvatar";
import UserPhotoIcon from "../../UI/UserAvatar";
import { useAuth } from "../../../store/authContext";

function Header() {
  const dispatch = useDispatch();
  const { userLoggedIn } = useAuth();
  let userPhoto = null;

  function handleToggleSidebar() {
    dispatch(uiActions.toggleSidebar());
  }

  return (
    <header className="w-full flex items-center justify-between p-5 pl-12 pr-12">
      <button
        className="text-elements-color-main"
        onClick={handleToggleSidebar}
      >
        <span className="text-4xl">≡</span>
      </button>
      {userLoggedIn && (
        <>
          {userPhoto && <UserPhotoIcon image={userPhoto} />}
          {!userPhoto && <DefaultAvatar isSmall />}
        </>
      )}
    </header>
  );
}

export default Header;
