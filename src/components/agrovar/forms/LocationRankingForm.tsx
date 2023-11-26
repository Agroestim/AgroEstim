import { LOCATIONS_CHOICES, VARITIES_CHOICES } from "@/graphql/config";
import { Form, FormFieldset, FormLabel, FormLegend } from "./styled";

export default function LocationRankingForm() {
  return (
    <Form>
      <FormFieldset>
        <FormLegend>Ranking por localidad</FormLegend>

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
            --Seleccione una opcion
          </option>
          {Object.entries(LOCATIONS_CHOICES).map((values) => (
            <option key={crypto.randomUUID()} value={values[0]}>
              {values[1]}
            </option>
          ))}
        </select>

        <hr />

        <FormLabel htmlFor="input_selection_variety">Variedad</FormLabel>
        <select name="selection_variety" id="input_selection_variety" multiple>
          <option key={crypto.randomUUID()} value="">
            --Seleccione una opcion--
          </option>
          {Object.entries(VARITIES_CHOICES).map((values) => (
            <option key={crypto.randomUUID()} value={values[0]}>
              {values[1]}
            </option>
          ))}
        </select>
      </FormFieldset>
    </Form>
  );
}
