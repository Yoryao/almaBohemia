import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import "./navBar.css"


export const NavBar = ({ marca, links }) => {
  return (
    <header>
      <NavLink id="brand" to="/">
        {marca}
      </NavLink>

      <div id="navbarLinksBar" >
        {links.map((link) => {
          return (
            <nav>
              <NavLink key={link.id} className="link" to={link.href}>
                {link.nombre}
              </NavLink>
            </nav>
          );
        })}
      </div>

      <NavLink id="cartWidget" to={"/cart"}>
        <CartWidget />
      </NavLink>

    </header>
  );
};

export default NavBar;
