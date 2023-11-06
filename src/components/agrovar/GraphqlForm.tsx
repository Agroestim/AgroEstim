import { Button } from "@/components/common/buttons/styled";
import { FormWrapper } from "./styles";

export function GraphqlQueryFormComponent() {
  return (
    <FormWrapper
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
    >
      <Button style={{ color: "#302f34", borderColor: "#2da6e8" }}>
        Ranking por localidad
      </Button>
      <Button style={{ color: "#302f34", borderColor: "#2da6e8" }}>
        Comparador de variedades
      </Button>
      <Button style={{ color: "#302f34", borderColor: "#2da6e8" }}>
        Compadador de campañas
      </Button>
      <Button style={{ color: "#302f34", borderColor: "#2da6e8" }}>
        Caracterìsticas de los cultivares
      </Button>
    </FormWrapper>
  );
}
