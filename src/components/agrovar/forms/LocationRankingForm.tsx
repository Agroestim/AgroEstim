import { Spinner } from "@/components/common/spinner/Spinner";
import { GQL_VARIETY_GROUP_PREFLIGHT_QUERY } from "@/graphql/queries";
import { VarietyGroupPreflightType } from "@/types/agrovar/PreflightTypes";
import { useQuery } from "@apollo/client";
import { useForm } from "react-hook-form";
import {
  Form,
  FormFieldset,
  FormLabel,
  FormLegend,
  StatusBoundary,
} from "./styled";

export default function LocationRankingForm() {
  const { register, handleSubmit } = useForm<VarietyGroupPreflightType>();
  const { data, loading, error } = useQuery<VarietyGroupPreflightType>(
    GQL_VARIETY_GROUP_PREFLIGHT_QUERY
  );

  if (loading) {
    return (
      <StatusBoundary>
        <Spinner />
      </StatusBoundary>
    );
  }

  if (error) {
    return (
      <StatusBoundary>
        <h3>The server response with an error.</h3>
        <p>The server has responded with any data at the request.</p>
        <p>
          <b>{error.message}</b>
        </p>
      </StatusBoundary>
    );
  }

  const { varietyOptionsList, locationOptionsList } = data || {};

  return (
    <Form onSubmit={handleSubmit((data) => console.log({ data }))}>
      <FormFieldset>
        <FormLegend>Ranking por localidad</FormLegend>

        <FormLabel htmlFor="input_selection_campaign">Campaña</FormLabel>
        <input
          type="date"
          id="input_selection_campaign"
          {...register("campaignOptionsList")}
          required
        />

        <hr />

        <FormLabel htmlFor="input_selection_location">Localidad</FormLabel>
        <select
          id="input_selection_location"
          {...register("locationOptionsList")}
          required
          multiple
        >
          <option key={crypto.randomUUID()} value="SELECT">
            --Seleccione una opcion--
          </option>

          {locationOptionsList?.map((value) => (
            <option key={crypto.randomUUID()} value={value}>
              {value}
            </option>
          ))}
        </select>

        <hr />

        <FormLabel htmlFor="input_selection_variety">Variedad</FormLabel>
        <select
          id="input_selection_variety"
          {...register("varietyOptionsList")}
          required
          multiple
        >
          <option key={crypto.randomUUID()} value="SELECT">
            --Seleccione una opcion--
          </option>

          {varietyOptionsList?.map((value) => (
            <option key={crypto.randomUUID()} value={value}>
              {value}
            </option>
          ))}
        </select>
      </FormFieldset>

      <button type="submit">Enviar</button>
      <button type="reset">Reestablecer</button>
    </Form>
  );
}
