import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--gray-300);
  padding: 0px 8px;
  height: 62px;
  width: 1260px;
`;

export const NavbarLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarBrandLogoWrapper = styled.div`
  height: 31px;
  width: 158px;
`;

export const NavbarBrandLogo = styled.img`
  height: 30px;
  width: 42px;
  object-fit: cover;
`;

export const NavbarBrand = styled.span`
  color: #302f34;
`;
