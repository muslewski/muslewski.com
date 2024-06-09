function Button({ tag = "button", children, className, ...props }) {
  const Component = tag;

  let bg = "bg-secondary";
  if (className.includes("bg")) bg = "";

  let rounded = "rounded-lg";
  if (className.includes("rounded")) rounded = "";

  return (
    <Component
      className={`font-title block tracking-wide font-medium text-xl text-white py-4 px-9 w-fit  ${bg} ${rounded} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Button;
