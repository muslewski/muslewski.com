function MenuItem({ children, href, icon, className, classNameA, ...props }) {
  return (
    <li
      className={`animate-fade-down animate-duration-500 py-1 h-fit ${className}`}
      {...props}
    >
      <a
        href={href}
        className={`flex items-center justify-center gap-3 cursor-pointer transition-all   ${classNameA}`}
      >
        <img src={icon} className="hidden lg:flex h-9" alt="" />
        {children}
      </a>
    </li>
  );
}

export default MenuItem;
