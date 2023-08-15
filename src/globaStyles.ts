import { createGlobalStyle } from "styled-components";

/**
 * Representa a los estilos glbales de la aplicacion.
 */
export default createGlobalStyle`
  :root {
    font-family: "Open Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    line-height: 1.5;
    font-weight: 400;
    font-synthesis: none;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;

    color: ${(props) => props.theme.textPrimary};
    background-color: ${(props) => props.theme.backgroundPrimary};
  }

  #root {
    max-width: 1280px;
    margin: 0 auto;
    padding: 1.75rem;
  }
  
  /* TODO: Definir los estilos de los textos */
`;
