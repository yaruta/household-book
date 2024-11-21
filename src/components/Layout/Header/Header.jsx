import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../store/ui-slice";
import { useAuth } from "../../../store/authContext";

import DefaultAvatar from "../../UI/DefaultAvatar";
import UserAvatar from "../../UI/UserAvatar";

function Header() {
  const dispatch = useDispatch();
  const { userLoggedIn, currentUser } = useAuth();
  const userPhoto = useSelector((state) => state.user.userImage);

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
            <p className="text-right text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500">
              Max Mustermann
            </p>
            <p className="text-right text-xs text-elements-color-main text-pink-500 pb-1">
              {currentUser.email}
            </p>
          </div>
          {userPhoto && <UserAvatar size="small" />}
          {!userPhoto && <DefaultAvatar isSmall />}
        </div>
      )}
    </header>
  );
}

export default Header;
