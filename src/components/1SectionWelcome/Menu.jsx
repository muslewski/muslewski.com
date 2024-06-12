import logo from "../../assets/Logo.svg";
import hamburger from "../../assets/Hamburger.svg";

function Menu() {
  return (
    <menu className="flex justify-between mt-10 mb-4 w-full">
      <li className="animate-fade-down animate-duration-500">
        <img src={logo} alt="" />
      </li>
      <li className="animate-fade-down animate-duration-500 animate-delay-200">
        {/* <img className="fixed right-11" src={hamburger} alt="" /> */}
        <a
          className="font-description text-2xl 
        font-semibold text-secondary tracking-wide "
          href="#kontakt"
        >
          Zatrudnij
        </a>
      </li>
    </menu>
  );
}

export default Menu;
