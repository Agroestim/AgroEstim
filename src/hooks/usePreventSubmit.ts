import React from "react";

export function usePreventSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
}
