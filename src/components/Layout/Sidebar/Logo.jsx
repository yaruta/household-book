/**
 * Logo component.
 * This component renders the application logo with a stylized text design.
 * @module Logo
 * @returns {JSX.Element} The logo component.
*/
function Logo() {
  return (
      <div className="uppercase">
        <span className="text-3xl font-bold text-logo-color">H</span>
        <span className=" text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
          ousehold Book
        </span>
      </div>
  );
}

export default Logo;
