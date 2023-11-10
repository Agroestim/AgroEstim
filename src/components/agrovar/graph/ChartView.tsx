import { FieldsetHiddeProp } from "@/types/FieldsetFormProps";

export function ChartViewcomponent({ hiddeView }: FieldsetHiddeProp) {
  return hiddeView ? null : <h1>Char view</h1>;
}
