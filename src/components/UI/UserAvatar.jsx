function UserAvatar({ image, className }) {
  
  return (
    <img
      src={image}
      alt="users photo"
      className={`w-10 h-10 rounded-3xl ${className}`}
    />
  );
}

export default UserAvatar;
