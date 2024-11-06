import UserAvatar from "../UI/UserAvatar";
import DefaultAvatar from "../UI/DefaultAvatar";

function Greeting() {
  let userPhoto = null;

  return (
    <div className="w-30 flex justify-start items-center gap-6">
      {userPhoto && <UserAvatar image={userPhoto} />}
      {!userPhoto && <DefaultAvatar/>}
      <div className="text-elements-color-main">
        <h2 className="text-2xl">Welcome back</h2>
        <h1 className="text-4xl">Max Mustermann!</h1>
      </div>
    </div>
  );
}

export default Greeting;
