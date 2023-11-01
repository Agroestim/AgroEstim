import styled from "styled-components";

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 8px;
  border-radius: 4px;

  font-family: "Zilla Slab", system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  width: fit-content;

  &:active,
  &:not(:active) {
    border-style: solid;
  }
`;
