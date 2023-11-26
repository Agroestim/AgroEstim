import styled from "styled-components";

export const Divider = styled.hr`
  width: -webkit-fill-available;
  border: none;
  outline-style: solid;
  outline-width: 1px;
  outline-color: ${({ theme }) => theme.textColorSecondary};
`;
