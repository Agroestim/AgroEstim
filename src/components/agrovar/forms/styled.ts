import styled from "styled-components";

export const SearchSettingsContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  gap: 20px;
  justify-content: space-around;
  position: relative;
  font-family: "Zilla Slab", system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: ${({ theme }) => theme.textColorPrimary};
`;

export const FormFieldset = styled.fieldset`
  border: none;
  width: -webkit-fill-available;
  display: flex;
  gap: 8px;
  align-items: stretch;
  flex-direction: column;
  flex-grow: 1;
  padding: 0px 8px;
  margin: 0;
`;

export const FormLegend = styled.legend`
  *& {
    font-size: 20px;
    font-weight: 800;
  }
`;

export const FormLabel = styled.label`
  font-weight: 500;
`;
