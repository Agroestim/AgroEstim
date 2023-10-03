import { FC } from "react";
import {
  BrandWrapper,
  Branding,
  Hamburger,
  NavItem,
  NavbarCollapseLayout,
  NavbarCollapseWrapper,
  NavbarLayout,
  NavbarNav,
  NavbarWrapper,
} from "./styled";

const NavbarCollapse: FC = () => {
  return (
    <NavbarCollapseWrapper>
      <NavbarCollapseLayout>
        <NavbarNav>
          <NavItem className="Active">AgroEstim</NavItem>
          <NavItem className="Disable">AgroGraph</NavItem>
        </NavbarNav>
        <Hamburger></Hamburger>
      </NavbarCollapseLayout>
    </NavbarCollapseWrapper>
  );
};

const Navbar: FC = () => {
  return (
    <NavbarWrapper>
      <NavbarLayout>
        <BrandWrapper>
          <Branding>
            <span className="brand-accent">/</span>
            <span>Agroestim</span>
          </Branding>
        </BrandWrapper>
        <Hamburger>
          <svg
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="M1 7H13M1 13H13M1 1H13"
                stroke="#50B7B2"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </g>
          </svg>
        </Hamburger>
      </NavbarLayout>
    </NavbarWrapper>
  );
};

export default Navbar;
export { NavbarCollapse };
