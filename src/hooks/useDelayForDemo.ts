import React from "react";

export function useDelayForDemo<C = { default: React.ComponentType }>(
  promise: Promise<C>
) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}
