import React, { useState } from "react";

export default function Field() {
  const [name, setName] = useState("");
  const [check, setChech] = useState(true);
  console.log(name);
  console.log(check);
  

  return (
    <div>
      <h2>Component field</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>Name:{name}</h2>
      <input
        type="checkbox"
        checked={check}
        onChange={(e) => setChech(e.target.checked)}
      />
      <label htmlFor="">Check box</label>

      {/* <select name="" id="">
        <option value="apple">apple</option>
        <option value="react">orange</option>
      </select> */}
    </div>
  );
}
