/**
 * UserFormLine component.
 * This component renders a flex container for form elements, ensuring proper spacing and alignment.
 * It accepts children elements and additional styling classes.
 * @module UserFormLine
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content inside the form line.
 * @param {string} [props.className] - Additional CSS classes for styling.
 * @returns {JSX.Element} The user form line component.
 */

function UserFormLine({ children, className }) {
  return (
    <div className={`flex mb-8 gap-8 justify-start items-center ${className}`}>
      {children}
    </div>
  );
}

export default UserFormLine;
