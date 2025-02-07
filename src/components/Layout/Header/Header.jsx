/**
 * Header component.
 * This component renders the application's header, displaying the user's name, email,
 * and avatar if logged in. It also includes a button to toggle the sidebar.
 * @module Header
 * @returns {JSX.Element} The header component.
 */

import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../store/ui-slice";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../../store/authContext";
import { useEffect } from "react";
import { userActions } from "../../../store/user-slice";

import DefaultAvatar from "../../UI/DefaultAvatar";
import UserAvatar from "../../UI/UserAvatar";
import { getUserInfo } from "../../../util/http";

function Header() {
  const dispatch = useDispatch();
  const { userLoggedIn, currentUser } = useAuth();
  const { userName, userId, isImageAvailable } = useSelector(
    (state) => state.user
  );

  // Fetch user information using React Query
  const { data, isError } = useQuery({
    queryKey: ["userName", { userId }],
    queryFn: ({ signal }) => getUserInfo({ signal, userId }),
    staleTime: 5000,
  });

  useEffect(() => {
    if (data && !isError) {
      dispatch(userActions.setUserName(data));
    }
  }, [data]);

  /**
   * Toggles the visibility of the sidebar.
   */
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
            <p className="text-right text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500 capitalize">
              {`${userName.firstName} ${userName.lastName}`}
            </p>
            <p className="text-right text-xs text-elements-color-main text-pink-500 pb-1">
              {currentUser.email}
            </p>
          </div>
          {isImageAvailable && <UserAvatar size="small" />}
          {!isImageAvailable && <DefaultAvatar size="small" />}
        </div>
      )}
    </header>
  );
}

export default Header;
