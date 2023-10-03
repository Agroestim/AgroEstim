import { createGlobalStyle } from "styled-components";

import BackgroundImage from "./assets/img/390x843_BACKGROUND_BRAND_IMAGE.png";

/**
 * Representa a los estilos glbales de la aplicacion.
 */
export default createGlobalStyle`
  :root {
    font-family: "Noto Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
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

  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  #root {
    /* max-height: 1280px; */
    width: 100%;
    height: 100%;
    background: url(${BackgroundImage}) no-repeat cover;
  }
  
  /* TODO: Exportar los estilos base desde figma. */

  /* HERE: Text styles */
  h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6 {
    font-family: "Zilla Slab", system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    letter-spacing: 2.08px;
  }

  p {
    font-family: "Noto Sans", system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  } 
`;
