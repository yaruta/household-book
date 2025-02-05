/**
 * Section component.
 * This component renders a styled <section> element with a gradient background.
 * It allows custom classes to be added via the className prop.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content inside the section.
 * @param {string} [props.className] - Additional CSS classes for styling.
 * @returns {JSX.Element} The styled section component.
*/

function Section({ children, className }) {
  return (
    <section className={`ml-12 mr-12 rounded-3xl bg-gradient-to-r from-10% from-sections-bg-1 to-90% to-sections-bg-2/50 ${className}`}>
      {children}
    </section>
  );
}

export default Section;
