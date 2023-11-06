import { GraphqlQueryFormComponent } from "./GraphqlForm";
import { AsideLayout, AsideWrapper } from "./styles";

export function AsideViewComponent() {
  return (
    <AsideWrapper>
      <AsideLayout>
        {/* TODO: Implements horizontal collapse */}
        <GraphqlQueryFormComponent />
      </AsideLayout>
    </AsideWrapper>
  );
}
