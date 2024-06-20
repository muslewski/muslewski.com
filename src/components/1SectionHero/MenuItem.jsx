function MenuItem({ children, href, icon, className, classNameA }) {
  return (
    <li
      className={`lg:flex animate-fade-down animate-duration-500  py-1  h-fit ${className}`}
    >
      <a
        href={href}
        className={`flex items-center justify-center gap-2 ${classNameA}`}
      >
        <img src={icon} className="h-9" alt="" />
        {children}
      </a>
    </li>
  );
}

export default MenuItem;
