import { FC } from "react";
import { Link } from "react-router-dom";

const NavbarCollapse: FC = () => {
  return (
    <div className="NavbarCollapse">
      <button className="NavbarToggleButton">
        <i className="NavHamburger"></i>
      </button>
      <ul className="Nav">
        <li className="NavItem Active">AgroEstim</li>
        <li className="NavItem Disable">AgroGraph</li>
      </ul>
    </div>
  );
};

const Navbar: FC = () => {
  return (
    <div className="NavbarWrapper">
      <nav className="NavbarLayout">
        <div className="NavbarContainer">
          <div className="NavbarBrandLayout">
            {/* Brand assets provider */}
            <Link to={"/"}>Agroestim</Link>
          </div>

          <NavbarCollapse />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
export { NavbarCollapse };
