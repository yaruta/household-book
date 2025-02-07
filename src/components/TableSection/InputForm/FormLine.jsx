/**
 * FormLine component.
 * This component acts as a layout wrapper for form elements, ensuring consistent spacing
 * and structure within a form.
 * @module FormLine
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The form elements to be wrapped inside the layout.
 * @param {string} [props.className] - Optional additional CSS classes for customization.
 * @returns {JSX.Element} The form line component.
 */
function FormLine({ children, className }) {
  return <div className={`flex justify-stretch mt-8 mb-8 w-full ${className}`}>{children}</div>;
}

export default FormLine;
