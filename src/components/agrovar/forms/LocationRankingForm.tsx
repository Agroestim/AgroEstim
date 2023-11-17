import { LOCATIONS_CHOICES, VARITIES_CHOICES } from "@/graphql/config";
import {
  FieldsetComponent,
  FormWrapper,
  LabelComponent,
  LegendComponent,
} from "./styled";

export default function LocationRankingForm() {
  return (
    <FormWrapper>
      <FieldsetComponent>
        <LegendComponent>Ranking por localidad</LegendComponent>

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
          {Object.entries(LOCATIONS_CHOICES).map((values) => (
            <option key={crypto.randomUUID()} value={values[0]}>
              {values[1]}
            </option>
          ))}
        </select>
        <LabelComponent htmlFor="input_selection_variety">
          Variedad
        </LabelComponent>
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
      </FieldsetComponent>
    </FormWrapper>
  );
}
