import { FC } from "react";
import { Link } from "react-router-dom";

const Footer: FC = () => {
  return (
    <div className="FooterWrapper">
      <footer className="FooterLayout">
        <div className="Container">
          <div className="BrandLayout">
            {/* Brand assets provider */}
            <Link to={"/"}>Agroestim</Link>
          </div>

          <div className="AboutUsLayout">
            <p className="Lead Bolder">
              Aplicacion desarrollada en colaboración con el
              <span className="TextAccent">INTA</span> y el equipo de
              <span className="TextAccent">Agroestim</span>.
            </p>
          </div>

          <div className="Navbar">{/* Navbar component */}</div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
