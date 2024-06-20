function MenuItem({ children, href, icon, className, classNameA }) {
  return (
    <li
      className={`animate-fade-down animate-duration-500  py-1  h-fit ${className}`}
    >
      <a
        href={href}
        className={`flex items-center justify-center gap-2  ${classNameA}`}
      >
        <img src={icon} className="hidden lg:flex h-9" alt="" />
        {children}
      </a>
    </li>
  );
}

export default MenuItem;
