import { FieldsetHiddeProp } from "@/types/FieldsetFormProps";

export function TableViewComponent({ hiddeView }: FieldsetHiddeProp) {
  return hiddeView ? null : <h1>Table view</h1>;
}
