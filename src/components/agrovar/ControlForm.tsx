import { ControlFormWrapper } from "./styles";

export function ControlForm() {
  return (
    <ControlFormWrapper>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
      ></form>
    </ControlFormWrapper>
  );
}
