import { Link } from "react-router-dom";
import { styled } from "styled-components";

// Link
export const BrandingLink = styled(Link)``;

// Navbar components

export const NavbarWrapper = styled.div`
  width: 358px;
  max-width: -webkit-fill-available;
  height: 32px;
  background-color: ${({ theme }) => theme.colorLight};
  box-shadow: 2px 2px 12px #575757;
  border-radius: 2px;
`;

export const NavbarLayout = styled.nav`
  height: 100%;
  width: -webkit-fill-available;
  padding: 0 10px;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  display: inline-flex;
`;

export const BrandWrapper = styled.div``;

export const Branding = styled.div`
  & span {
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 2.08;
    word-wrap: break-word;
    color: #575757;
  }

  & span.brand-accent {
    /* color: ${({ theme }) => theme}; */
    color: #ef5350;
  }
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
  width: fit-content;
  height: fit-content;
  justify-content: center;
  align-items: center;
  display: flex;

  border: none;
  background: none;

  & svg {
    width: 12px;
    height: 12px;
  }
`;
