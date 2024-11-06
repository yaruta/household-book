function Button({ children, ...props }) {
  return (
    <button {...props} className="bg-gradient-to-r from-purplec to-cyan-500 rounded-full min-w-24 h-10 p-4 flex justify-center items-center">
      <span className="text-elements-color-main">{children}</span>
    </button>
  );
}

export default Button;
