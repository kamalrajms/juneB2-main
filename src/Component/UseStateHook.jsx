import React, { useState } from "react";

export default function UseStateHook() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(true);
  console.log(darkMode);

  return (
    <div>
      <nav>
        {user ? <h2>welcome back</h2> : <h2>Pleace login</h2>}
        {user && (
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
            suscipit, quibusdam voluptate aspernatur unde dolorum modi expedita
            aut quo ad, quod ipsa blanditiis nam eligendi provident repellat.
            Hic, asperiores earum.
          </p>
        )}
        <button onClick={() => setUser(!user)}>
          sign {user ? "out" : "in"}
        </button>
      </nav>
      <nav>
        <h2>useState count -- {count}</h2>
        <button onClick={() => setCount(count + 1)}>increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>reset</button>
      </nav>
      <nav
        style={{
          backgroundColor: darkMode ? "#333" : "#fff",
          color: darkMode ? "#fff" : "#333",
          padding: "30px",
        }}
      >
        {/* darkMode===false,ture,false,t,f,t,f,t */}
        <button onClick={() => setDarkMode(!darkMode)}>
          switch to {darkMode ? "light" : "Dark"} mode
        </button>
        <p>you are in {darkMode ? "Dark" : "light"} mode</p>
      </nav>
    </div>
  );
}
// !true==false
// !false==true
