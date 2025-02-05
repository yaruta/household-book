import { useEffect } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/ui-slice";
import { userActions } from "../store/user-slice";

/**
 * Custom hook to load the user's profile photo from Firebase Storage.
 * This hook fetches the latest user profile image and updates the Redux store.
 * It triggers a loading state while fetching and resets the update flag after completion.
*/
export const useLoadUserPhoto = () => {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.user.userId); // Retrieves user ID from Redux store
  const isUpdated = useSelector((state) => state.user.isUpdated); // Checks if the user image was updated

  const userImageRef = ref(storage, `images/${userId}`);  // Reference to the user's image folder in Firebase Storage

  useEffect(() => {
    // Sets loading state to true before fetching
    dispatch(uiActions.setImageIsLoading());
    listAll(userImageRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          dispatch(userActions.setUserImage(url)); // Updates Redux state with the image URL
          dispatch(uiActions.setImageIsNotLoading()); // Sets loading state to false after fetching
        });
      });
    });
    dispatch(userActions.removeIsUpdated()); // Resets the update flag in Redux store
  }, [isUpdated]); // Re-runs the effect when the update flag changes
};
