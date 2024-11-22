import { useEffect, useState } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/ui-slice";
import { userActions } from "../store/user-slice";

export const useLoadUserPhoto = () => {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.user.userId);
  const isUpdated = useSelector((state) => state.user.isUpdated);

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
    dispatch(userActions.removeIsUpdated());
  }, [isUpdated]);
};
