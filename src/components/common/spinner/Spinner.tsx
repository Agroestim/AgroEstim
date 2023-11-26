import { Car, SVGSpinner, Track } from "./styled";

export function Spinner() {
  return (
    <>
      <SVGSpinner viewBox="0 0 40 40" height="40" width="40">
        <Track
          cx="20"
          cy="20"
          r="17.5"
          pathLength="100"
          stroke-width="5px"
          fill="none"
        />
        <Car
          cx="20"
          cy="20"
          r="17.5"
          pathLength="100"
          stroke-width="5px"
          fill="none"
        />
      </SVGSpinner>
    </>
  );
}
