// import {} from "@tanstack/react-table";
import { gql, useQuery } from "@apollo/client";
import { Button } from "../common/buttons/styled";
import { Spinner } from "../common/spinner/styled";
import { TableViewComponent } from "./TableView";
import {
  FetchStatusWrapper,
  MainViewLayout,
  MainViewWrapper,
  SettingsBar,
} from "./styles";

const GET_VARIETIES_QUERY = gql`
  query GetVarietyesRanking($varieties: [String]!) {
    varietyComparator(varieties: $varieties) {
      documentId
      latitude
      location
      longitude
      paperPepetition
      paperReference
      paperType
      year
    }
  }
`;

export function MainView() {
  const { loading, error } = useQuery(GET_VARIETIES_QUERY, {
    variables: { varieties: ["ARSLAK"] },
  });

  return (
    <MainViewWrapper>
      <MainViewLayout>
        <SettingsBar>
          <Button
            style={{
              color: "#fff",
              backgroundColor: "#2da6e8",
              border: "none",
            }}
          >
            Cambiar vista
          </Button>

          <Button
            style={{
              color: "#fff",
              backgroundColor: "#da4545",
              border: "none",
            }}
          >
            Recargar
          </Button>
        </SettingsBar>

        <FetchStatusWrapper>
          {error ? <span>{error?.message}</span> : null}
          {loading ? <Spinner /> : null}
        </FetchStatusWrapper>

        <TableViewComponent></TableViewComponent>
      </MainViewLayout>
    </MainViewWrapper>
  );
}
