import { useAuth } from "../../store/authContext";
import { useState } from "react";

import Button from "../UI/Button";
import Section from "../UI/Section";
import UserFormInput from "./UserFormInput";
import UserFormLine from "./UserFormLine";
import EditUserAvatar from "./EditUserAvatar";
import UserAvatar from "./UserAvatar";

function UserProfileSection() {
  const { currentUser } = useAuth();
  const [isEdit, setIsEdit] = useState(false);

  const handleStartEdit = () => {
    setIsEdit(true);
  };

  const handleEdit = () => {
    setIsEdit(false);
  };
  
  return (
    <Section className="flex gap-16 p-8 mt-16">
      <UserAvatar />
      <article className="flex-col text-elements-color-main w-full">
        <UserFormLine className="mb-12">
          <div>
            <h2 className="uppercase text-xl font-bold">Profile</h2>
            <p className="text-gray-500">
              Update your photo and personal details
            </p>
          </div>
          <div>
            <Button onClick={isEdit ? handleEdit : handleStartEdit}>
              {isEdit ? "Save" : "Edit"}
            </Button>
          </div>
        </UserFormLine>
        <UserFormLine>
          <p className="min-w-20">Email:</p>
          <p className="text-pink-500">{currentUser.email}</p>
        </UserFormLine>
        <UserFormInput label="First Name:" id="firstName" isEdit={isEdit} />
        <UserFormInput label="Last Name:" id="lastName" isEdit={isEdit} />
        <EditUserAvatar/>
      </article>
    </Section>
  );
}

export default UserProfileSection;
