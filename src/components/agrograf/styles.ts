import { styled } from "styled-components";

export const Wrapper = styled.div``;

export const Layout = styled.div`
  display: grid;
  grid-template-areas: "top-navigation" "top-navigation" "top-navigation",
    "middle-sidebar" "main-view" "main-view",
    "middle-sidebar" "main-view" "main-view";
`;
