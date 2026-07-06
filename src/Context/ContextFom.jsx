import React, { useContext } from "react";
import ContextField from "./ContextField";
import { Pass } from "../App";

export default function ContextFom() {
  const { theme } = useContext(Pass);
  return (
    <div className={theme}>
      <h2>Context from</h2>
      <ContextField />
    </div>
  );
}
