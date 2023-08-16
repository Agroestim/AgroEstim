import { Link } from "react-router-dom";
import { styled } from "styled-components";

// Link
export const BrandingLink = styled(Link)`
  padding: 0 10px;
`;

// Navbar components

export const NavbarWrapper = styled.div`
  --ags-guetter-x: 1.5rem;
  height: 44px;
  padding-right: calc(var(--ags-guetter-x) * 0.5);
  padding-left: calc(var(--ags-guetter-x) * 0.5);
  padding-bottom: 24px;
  padding-top: 12px;
`;

export const NavbarLayout = styled.nav`
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarBrandWrapper = styled.div`
  width: auto;
  height: auto;
`;

export const NavbarBrandLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const NavbarCollapseWrapper = styled.div`
  width: auto;
`;

export const NavbarCollapseLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const NavbarNav = styled.ul`
  padding-left: 15px;
  padding-right: 15px;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const NavItem = styled.li`
  padding: 4px 0;
  list-style: none;
  /* TODO: diseñar el proveedor de estado de actividad
    para los botones */
  /* color: %{({isActive, isDisable}) => isActive && !isDisable ? "" : "" }; */
`;

export const Hamburger = styled.button`
  padding: 0 10px;
  align-self: center;
  height: 25px;
  width: 25px;
  border: none;
  background: ${({ theme }) => `url("${theme.togglerIconURL}")`} no-repeat
    center;
  cursor: none;
`;
