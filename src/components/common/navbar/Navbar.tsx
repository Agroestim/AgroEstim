import {
  NavbarBrand,
  NavbarBrandLogo,
  NavbarBrandLogoWrapper,
  NavbarLayout,
  NavbarWrapper,
} from "./styled";

export function CommonNavbar() {
  return (
    <NavbarWrapper>
      <NavbarLayout>
        <NavbarBrandLogoWrapper>
          <NavbarBrandLogo
            src=""
            alt="AGROESTIM_BRAND_LOGO"
            className="brand-logo"
          />
          <NavbarBrand>Agroestim</NavbarBrand>
        </NavbarBrandLogoWrapper>
        <button className="navbar-toggler-btn">asd</button>
      </NavbarLayout>
    </NavbarWrapper>
  );
}
