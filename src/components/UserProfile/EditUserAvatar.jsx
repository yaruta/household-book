import { deleteObject, uploadBytes } from "firebase/storage";
import { storage } from "../../firebase/firebase";
import { ref } from "firebase/storage";

import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { useState } from "react";
import { userActions } from "../../store/user-slice";

import PhotoIcon from "../Icons/PhotoIcon";

function EditUserAvatar() {
  const dispatch = useDispatch();
  const [imageFileUpload, setImageFileUpload] = useState(null);
  const userId = useSelector((state) => state.user.userId);

  const handleImagePick = (event) => {
    setImageFileUpload(event.target.files[0]);
  };

  const handleAddPhoto = async (event) => {
    event.preventDefault();

    if (imageFileUpload === null) {
      return;
    }

    const imageRef = ref(storage, `images/${userId}/profileImage`);
    dispatch(uiActions.setImageIsLoading());

    uploadBytes(imageRef, imageFileUpload).then(() => {
      setImageFileUpload(null);
      dispatch(userActions.setIsImageAvailable());
      dispatch(uiActions.setImageIsNotLoading());
      dispatch(userActions.setIsUpdated());
    }).catch((error) => {
      window.alert(
        "An error occured by editing the user photo. Please try again later."
      );
    });;
  };

  const handleDeletePhoto = async () => {
    const imageRef = ref(storage, `images/${userId}/profileImage`);

    deleteObject(imageRef)
      .then(() => {
        dispatch(userActions.removeUserImage());
        dispatch(userActions.removeIsImageAvailable());
      })
      .catch((error) => {
        window.alert(
          "An error occured by deleting the user photo. Please try again later."
        );
      });
  };

  return (
    <div className="flex justify-start gap-8 mt-16 max-lg:flex-col">
      <div className="w-1/3 max-lg:w-full max-lg:flex max-lg:justify-between max-lg:items-center">
        <h2 className="uppercase text-xl font-bold">Your photo</h2>
        <p className="text-gray-500 max-md:hidden">Update your photo</p>
      </div>
      <form
        id="user-info"
        onSubmit={handleAddPhoto}
        className="flex items-start justify-between w-2/3 max-lg:w-full"
      >
        <div>
          <label htmlFor="userImageFile">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-elements-color-main w-12 h-12 rounded-full flex justify-center items-center">
              <PhotoIcon />
            </div>
          </label>
          {imageFileUpload && (
            <p className="text-gray-500 text-xs pt-2 text-center">
              {imageFileUpload.name}
            </p>
          )}
          <input
            type="file"
            id="userImageFile"
            onChange={handleImagePick}
            className="hidden"
          />
        </div>
        <div className="flex gap-4">
          <button
            type="button"
            className="text-gray-500 hover:text-cyan-500"
            onClick={handleDeletePhoto}
          >
            Delete
          </button>
          <button
            type="submit"
            className="text-elements-color-main hover:text-purple-500"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditUserAvatar;
