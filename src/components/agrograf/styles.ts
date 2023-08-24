import { styled } from "styled-components";

export const Wapper = styled.div``;

export const MainViewWrapper = styled.main`
  width: 358px;
  height: 714px;
  position: relative;
  background-color: ${({ theme }) => theme.colorLight};
  box-shadow: 2px 2px 12px #57575780;
  border-radius: 2px;
`;

export const FixedPanelWrapper = styled.div<{ isVisible?: boolean }>`
  width: -webkit-fill-available;
  height: -webkit-fill-available;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;

export const FloatingSettingsWrapper = styled.div<{ isVissible?: boolean }>`
  width: 358px;
  height: 714px;
  position: absolute;
  backdrop-filter: blur(10px);
  display: ${({ isVissible }) => (isVissible ? "block" : "none")};
`;

export const FloatingSettingsLayout = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  display: flex;
`;

export const SettingsBarWrapper = styled.div`
  padding: 4px;
  background-color: ${({ theme }) => theme.colorLight};
  box-shadow: 2px 2px 12px #57575780;
  border-radius: 2px;
  overflow: hidden;
`;

export const SettingsBarLayout = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-start;
  justify-content: space-between;
`;

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
