import { Form, FormFieldset, FormLabel, FormLegend } from "./styled";

export default function VarietycomparatorForm() {
  return (
    <Form>
      <FormFieldset>
        <FormLegend>Comparador de variedades</FormLegend>

        <FormLabel htmlFor="input_selection_campaign">Campaña</FormLabel>
        <input
          type="date"
          id="input_selection_campaign"
          name="selection_campaign"
          min="2013-00-00"
          required
        />

        <hr />

        <FormLabel htmlFor="input_selection_location">Localidad</FormLabel>
        <select
          name="selection_location"
          id="input_selection_location"
          multiple
        >
          <option key={crypto.randomUUID()} value="">
            --Seleccione una opcion--
          </option>
        </select>

        <hr />

        <FormLabel htmlFor="input_selection_variety">Variedad</FormLabel>
        <select name="selection_variety" id="input_selection_variety" multiple>
          <option key={crypto.randomUUID()} value="">
            --Seleccione una opcion--
          </option>
        </select>
      </FormFieldset>
    </Form>
  );
}
