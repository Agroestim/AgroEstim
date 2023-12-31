import styled from "styled-components";

export const ContainerLayout = styled.div`
  display: flex;
  flex-direction: row;
`;

export const AsideWrapper = styled.aside`
  height: 100%;

  max-width: 315px;
  width: -webkit-fill-available;
  padding: 8px 0px;

  border-color: #575757;
  border-right-style: solid;
  border-right-width: 1px;
`;

export const AsideLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  margin: 0 8px;
`;

export const Aside = styled.aside`
  /* height */
  width: 100%;
  max-width: 315px;
  padding: 8px 0px;
  margin: 0 8px;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
`;

export const Main = styled.main`
  /* width */
  width: 100%;
  /* height */
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
`;

export const MainWrapper = styled.main`
  width: 100%;
  height: 100%;
`;

export const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const GraphqlFetchStatus = styled.div`
  display: grid;
  place-content: center;
  width: max-content;

  &span {
    font-family: "Zilla Slab", system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
      "Helvetica Neue", sans-serif;
    font-size: 24px;
    font-weight: 500;
    color: #da4545;
  }
`;
