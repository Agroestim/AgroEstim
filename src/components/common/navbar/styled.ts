import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-color: ${({ theme }) => theme.textColorSecondary};
  padding: 0px 8px;
  height: 62px;
  width: 1260px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarBrandWrapper = styled.div`
  height: 31px;
  width: 158px;
`;

export const NavbarBrandLayout = styled.div`
  display: flex;
  flex-direction: row;
`;

export const NavbarBrandLogo = styled.img`
  height: 30px;
  width: 42px;
  object-fit: cover;
`;

export const NavbarBrand = styled.strong`
  font-family: "Zilla Slab", system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  font-size: 1.5rem;
  color: #302f34;
`;

export const NavbarTogglerButton = styled.button`
  padding: 4px;
  cursor: default;
  border: none;
  border-radius: 4px;

  &:hover {
    & {
      color: #2da6e8;
    }
    border-color: #2da6e8;
  }
`;
