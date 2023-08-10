import { createGlobalStyle, css } from "styled-components";

const styledFontChunk = css`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: ${(props) => props.theme.textPrimary};
`;

/**
 * Representa a los estilos glbales de la aplicacion.
 */
export default createGlobalStyle`
    ${styledFontChunk}
`;
