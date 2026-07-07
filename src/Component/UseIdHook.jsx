import React, { useId } from "react";

export default function UseIdHook() {
  const name = useId();
  const email = useId();
  console.log(name, email);

  return (
    <div>
      <nav>
        <label htmlFor={name}>name</label>
        <input type="text" id={name} />
      </nav>
      <nav>
        <label htmlFor={email}>email</label>
        <input type="text" id={email} />
      </nav>
    </div>
  );
}
