import React from "react";
import Second from "./Second";

export default function First() {
  return (
    <div style={{border:"2px solid #333",padding:"20px"}}>
      <h2>First Component</h2>
      <Second />
    </div>
  );
}
