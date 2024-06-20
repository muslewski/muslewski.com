function LinkCard({ text, logo, color1, color2, href }) {
  const gradient = `linear-gradient(-25deg, ${color1},${color2})`;
  return (
    <li>
      <a href={href} target="_blank" className="flex flex-col gap-2 lg:gap-3">
        <img src={logo} className="w-11" alt="" />
        <span
          className="bg-gradient-to-br  py-2 px-4 lg:px-6 rounded-full rounded-tl-none"
          style={{ backgroundImage: gradient }}
        >
          {text}
        </span>
      </a>
    </li>
  );
}

export default LinkCard;
