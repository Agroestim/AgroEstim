import styled from "styled-components";

type ButtonSize = "lg" | "default" | "sm";
type ButtonType = "default" | "inline";
type ButtonPropType = {
  size?: ButtonSize;
  style?: ButtonType;
  disable?: boolean;
};

export const Button = styled.button<ButtonPropType>`
  border: 0.45px solid #575757;
  border-radius: 4px;

  :active {
  }
  :hover {
  }
  :focus,
  :focus-visible {
  }
`;

export const InlineButton = styled.button<ButtonPropType>`
  border: 0.45pxsolid #575757;
  border-radius: 4px;

  :active {
  }
  :hover {
  }
  :focus,
  :focus-visible {
  }
`;
