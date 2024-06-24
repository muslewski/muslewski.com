function MenuItem({ children, href, icon, className, classNameA, ...props }) {
  return (
    <li
      className={`animate-duration-500 py-1 h-fit ${className} ${
        className.includes("animate-jump") ? "" : " animate-fade-down"
      }`}
      {...props}
    >
      <a
        href={href}
        className={`flex items-center justify-center gap-3 cursor-pointer transition-all hover:scale-105   ${classNameA}`}
      >
        <img src={icon} className=" h-9" alt="" />
        {children}
      </a>
    </li>
  );
}

export default MenuItem;
