import React, { useContext } from "react";
import ContextBtn from "./ContextBtn";
import { Pass } from "../App";

export default function ContextField() {
  const { data } = useContext(Pass);
  return (
    <div>
      <input type="text" value={data.name} />
      <ContextBtn />
    </div>
  );
}
