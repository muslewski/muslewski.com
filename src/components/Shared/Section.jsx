function Section({ children, className, ...props }) {
  return (
    <section
      className={`mx-10 p-1 flex flex-col items-center w-4/5 self-center lg:w-11/12 ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}

export default Section;
