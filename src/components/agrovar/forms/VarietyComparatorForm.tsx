import {
  FieldsetComponent,
  FormWrapper,
  LabelComponent,
  LegendComponent,
} from "../styles";

export default function VarietycomparatorForm() {
  return (
    <FormWrapper>
      <FieldsetComponent>
        <LegendComponent>Comparador de variedades</LegendComponent>

        <LabelComponent htmlFor="input_selection_campaign">
          Campaña
        </LabelComponent>
        <input
          type="date"
          id="input_selection_campaign"
          name="selection_campaign"
          min="2013-00-00"
          required
        />
        <LabelComponent htmlFor="input_selection_location">
          Localidad
        </LabelComponent>
        <select
          name="selection_location"
          id="input_selection_location"
          multiple
        >
          <option key={crypto.randomUUID()} value="">
            --Seleccione una opcion
          </option>
        </select>
        <LabelComponent htmlFor="input_selection_variety">
          Variedad
        </LabelComponent>
        <select name="selection_variety" id="input_selection_varity" multiple>
          <option key={crypto.randomUUID()} value="">
            --Seleccione una opcion--
          </option>
        </select>
      </FieldsetComponent>
    </FormWrapper>
  );
}
