import { uploadBytes } from "firebase/storage";
import { storage } from "../../firebase/firebase";
import { ref } from "firebase/storage";

import PhotoIcon from "../Icons/PhotoIcon";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { useState } from "react";

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
      dispatch(uiActions.setImageIsNotLoading());
    });
  };

  return (
    <div className="flex justify-start gap-8 mt-16">
      <div className="w-1/3">
        <h2 className="uppercase text-xl font-bold">Your photo</h2>
        <p className="text-gray-500">Update your photo</p>
      </div>
      <form
        id="user-info"
        onSubmit={handleAddPhoto}
        className="flex items-start justify-between w-2/3"
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
          <button type="button" className="text-elements-color-main">
            Delete
          </button>
          <button type="submit" className="text-elements-color-main">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditUserAvatar;
