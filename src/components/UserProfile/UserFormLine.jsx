function UserFormLine({ children, className }) {
  return (
    <div className={`flex mb-8 gap-8 justify-start items-center ${className}`}>
      {children}
    </div>
  );
}

export default UserFormLine;
