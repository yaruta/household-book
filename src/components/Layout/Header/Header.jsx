import { useDispatch } from "react-redux";
import { uiActions } from "../../../store/ui-slice";

import DefaultAvatar from "../../UI/DefaultAvatar";
import UserPhotoIcon from "../../UI/UserAvatar";
import { useAuth } from "../../../store/authContext";

function Header() {
  const dispatch = useDispatch();
  const { userLoggedIn, currentUser } = useAuth();
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
        <div className="flex items-center justify-end gap-4">
          <div className="flex-col">
            <p className="text-right text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500">Max Mustermann</p>
            <p className="text-right text-xs text-elements-color-main text-pink-500 pb-1">{currentUser.email}</p>
          </div>
          {userPhoto && <UserPhotoIcon image={userPhoto} />}
          {!userPhoto && <DefaultAvatar isSmall />}
        </div>
      )}
    </header>
  );
}

export default Header;
