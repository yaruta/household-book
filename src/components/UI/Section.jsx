function Section({ children, className }) {
  return (
    <section className={`ml-12 mr-12 rounded-3xl bg-gradient-to-r from-10% from-sections-bg-1 to-90% to-sections-bg-2/50 ${className}`}>
      {children}
    </section>
  );
}

export default Section;
