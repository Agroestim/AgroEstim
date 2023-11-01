import {
  NavbarBrand,
  NavbarBrandLayout,
  NavbarBrandLogo,
  NavbarBrandWrapper,
  NavbarTogglerButton,
  NavbarWrapper,
} from "./styled";

import AGS_BRAND_LOGO from "../../../assets/img/AGS_BRAND_LOGO.png";

export function CommonNavbar() {
  return (
    <NavbarWrapper>
      <NavbarBrandWrapper>
        <NavbarBrandLayout>
          <NavbarBrandLogo src={AGS_BRAND_LOGO} alt="AGROESTIM_BRAND_LOGO" />
          <NavbarBrand>Agroestim</NavbarBrand>
        </NavbarBrandLayout>
      </NavbarBrandWrapper>
      <NavbarTogglerButton>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="tabler-icon-menu-2">
            <path
              id="tabler-icon-menu-2-vector"
              d="M4 6H20M4 12H20M4 18H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </NavbarTogglerButton>
    </NavbarWrapper>
  );
}
