import useTypedSelector from "../useTypedSelector";

/**
 * NOTE: Still in development
 *
 */
export function useAgrovarSearchFormHandler() {
  const currentFormType = useTypedSelector(
    ({ AgrovarForm }) => AgrovarForm.formType
  );

  function handleSubmit(data: unknown) {
    console.log({ data });
  }

  return {
    handleSubmit,
  };
}
