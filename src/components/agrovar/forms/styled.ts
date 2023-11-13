import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  gap: 21px;
  justify-content: space-around;
  position: relative;
  font-family: "Zilla Slab", system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #575757;
`;

export const FieldsetComponent = styled.fieldset`
  border: none;
  width: -webkit-fill-available;
  display: flex;
  gap: 10px;
  align-items: stretch;
  flex-direction: column;
  flex-grow: 1;
`;

export const LegendComponent = styled.legend`
  *& {
    font-size: 20px;
    font-weight: 800;
  }
`;

export const LabelComponent = styled.label`
  font-weight: 500;
`;
