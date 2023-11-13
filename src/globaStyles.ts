import { createGlobalStyle } from "styled-components";

/**
 * Representa a los estilos glbales de la aplicacion.
 */
export default createGlobalStyle`
  :root {
    font-family: "Noto Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    font-synthesis: none;    
    font-weight: 400;
    letter-spacing: 0px;
    line-height: normal;
    

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

    display: flex;
    justify-content: center;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: "Zilla Slab", system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 600;
    letter-spacing: 2.08px;
  }

  p, span {
    font-family: "Noto Sans", system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  button, input[type=button], input[type=submit] {
    font-family: "Zilla Slab", system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    text-align: center;
    white-space: nowrap;


    width: max-content;
    padding: 6px 10px;
  }
`;
