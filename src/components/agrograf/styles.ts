import { styled } from "styled-components";

// -- App related --

export const AgroGraphWrapper = styled.div`
  height: 100%;
  padding: 44px 16px;
  backdrop-filter: blur(8px);
`;

export const AgroGraphLayout = styled.div`
  /* HERE: Refleja la posicion del FloatingDashboardWrapper */
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: center;
  gap: 10px;
`;

// -- Fixed Dashboard related --

export const FixedDashboardWrapper = styled.main`
  width: -webkit-fill-available;
  height: -webkit-fill-available;
`;

export const FixedDashboardLayout = styled.div`
  display: flex;
  padding: 27px 37px;
  background-color: ${({ theme }) => theme.colorLight};
  box-shadow: 2px 2px 12px #57575780;
  border-radius: 2px;
`;

// -- Floating Dashboard related --

export const FloatingDashboardWrapper = styled.div`
  align-self: stretch;
  backdrop-filter: blur(10px);
  background-color: ${({ theme }) => theme.colorLight};
`;

export const FloatingDashboardLayout = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  display: flex;
`;

export const FormWrapper = styled.div`
  padding: 4px;
  background-color: ${({ theme }) => theme.colorLight};
  box-shadow: 2px 2px 12px #57575780;
  border-radius: 2px;
  overflow: hidden;
`;

export const FormOptionsWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-start;
  justify-content: space-between;
`;

export const OptionsBarWrapper = styled.div`
  height: 88px;
  padding: 4;
  background-color: ${({theme}) => theme.colorLight};
  box-shadow: 2px 2px 12px #57575780;
  border-radius: 2;
`

export const SettingsBar = styled.nav`
  display: flex;
  gap: 8px;
  align-self: stretch;
  align-items: flex-start;
  justify-content: center;
  padding: 4px;
  background-color: ${({ theme }) => theme.colorLight};
  box-shadow: 2px 2px 12px #57575780;
  border-radius: 2px;
  overflow: hidden;
`;
