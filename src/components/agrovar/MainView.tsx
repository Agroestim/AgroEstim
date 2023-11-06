import { Button } from "../common/buttons/styled";
import { TableViewComponent } from "./TableView";
import { MainViewLayout, MainViewWrapper, SettingsBar } from "./styles";

export function MainViewComponent() {
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

        {/* <FetchStatusWrapper>
          {error ? <span>{error?.message}</span> : null}
          {loading ? <Spinner /> : null}
        </FetchStatusWrapper> */}

        <TableViewComponent></TableViewComponent>
      </MainViewLayout>
    </MainViewWrapper>
  );
}
