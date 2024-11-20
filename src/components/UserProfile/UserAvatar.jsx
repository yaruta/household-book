import { listAll, getDownloadURL, ref } from "firebase/storage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { userActions } from "../../store/user-slice";
import { storage } from "../../firebase/firebase";

function UserAvatar() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.userId);
  const imageIsLoading = useSelector((state) => state.ui.imageIsLoading);
  const userImage = useSelector((state) => state.user.userImage);

  const userImageRef = ref(storage, `images/${userId}`);

  useEffect(() => {
    dispatch(uiActions.setImageIsLoading());
    listAll(userImageRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          dispatch(userActions.setUserImage(url));
          dispatch(uiActions.setImageIsNotLoading());
        });
      });
    });
  }, []);

  const specialCssClass = "animate-pulse";

  return (
    <article>
      <div
        className={`w-44 h-44 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex justify-center items-center ${
          imageIsLoading ? specialCssClass : ""
        }`}
      >
        {userImage && (
          <img
            src={userImage}
            alt="profile image"
            className="w-11/12 h-11/12 rounded-full"
          />
        )}
      </div>
    </article>
  );
}

export default UserAvatar;
