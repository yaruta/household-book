import { useAuth } from "../../store/authContext";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Button from "../UI/Button";
import Section from "../UI/Section";
import UserFormInput from "./UserFormInput";
import UserFormLine from "./UserFormLine";
import EditUserAvatar from "./EditUserAvatar";
import UserAvatar from "../UI/UserAvatar";
import DefaultAvatar from "../UI/DefaultAvatar";
import { useMutation } from "@tanstack/react-query";
import { addUserInfo, queryClient } from "../../util/http";

function UserProfileSection() {
  const { currentUser } = useAuth();
  const { userId, userName } = useSelector((state) => state.user);
  const [isEdit, setIsEdit] = useState(false);
  const [userData, setUserData] = useState({
    firstName: userName ? userName.firstName : "",
    lastName: userName ? userName.lastName : "",
  });
  const [inputError, setInputError] = useState(false);

  useEffect(() => {
    if (userName) {
      setUserData({
        firstName: userName.firstName,
        lastName: userName.lastName,
      });
    }
  }, [userName]);

  const {
    mutate,
    isPending,
    isError: isMutationError,
    error: mutationError,
  } = useMutation({
    mutationFn: addUserInfo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userName"] });
    },
  });

  const { isImageAvailable } = useSelector((state) => state.user);

  const handleStartEdit = () => {
    setIsEdit(true);
  };

  const handleEdit = () => {
    if (userData.firstName.trim() === "" || userData.lastName.trim() === "") {
      setInputError(true);
      return;
    }
    mutate({ userId, userData });
    setIsEdit(false);
  };

  const handleChange = (event) => {
    setUserData((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  return (
    <Section className="flex gap-16 p-8 mt-16 max-lg:flex-col max-lg:items-center">
      {isImageAvailable && <UserAvatar />}
      {!isImageAvailable && <DefaultAvatar />}
      <article className="flex-col text-elements-color-main w-full">
        <UserFormLine className="mb-12 max-lg:flex max-lg:justify-between max-lg:items-center max-md:flex-col">
          <div>
            <h2 className="uppercase text-xl font-bold">Profile</h2>
            <p className="text-gray-500 max-lg:hidden">
              Update your photo and personal details
            </p>
          </div>
          <div>
            <Button
              onClick={isEdit ? handleEdit : handleStartEdit}
              disabled={isPending}
            >
              {isPending ? "Saving" : isEdit ? "Save" : "Edit"}
            </Button>
          </div>
        </UserFormLine>
        <UserFormLine>
          {isMutationError && <p className="text-gray-500">{mutationError}</p>}
          {inputError && (
            <p className="text-gray-500 text-xs">
              First name or last name cannot be an empty string.
            </p>
          )}
        </UserFormLine>
        <UserFormLine>
          <p className="min-w-20">Email:</p>
          <p className="text-pink-500">{currentUser.email}</p>
        </UserFormLine>
        <UserFormInput
          label="First Name:"
          id="firstName"
          isEdit={isEdit}
          onChange={handleChange}
          value={userName.firstName}
        />
        <UserFormInput
          label="Last Name:"
          id="lastName"
          isEdit={isEdit}
          onChange={handleChange}
          value={userName.lastName}
        />
        <EditUserAvatar />
      </article>
    </Section>
  );
}

export default UserProfileSection;
