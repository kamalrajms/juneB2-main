import React from "react";
import useCount from "../Component/useCount";
import useApi from "../Component/useApi";

export default function About() {
  const { count, increment, decrement, reset } = useCount(7);

  const {
    data: user,
    error,
    loading,
  } = useApi("https://jsonplaceholder.typicode.com/users");

  if (loading) return <h1>Loading.............!</h1>;
  if (error) return <h1 style={{ color: "red" }}>{error}</h1>;
  return (
    <div>
      <h2>Custom hook:{count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>Reset</button>
      <h2>About component</h2>
      <h1>Custom API</h1>
      <div>
        {user.map((person) => (
          <li
            key={person.id}
            style={{ border: "2px solid #333", padding: "20px" }}
          >
            <h2>{person.name}</h2>
            <h2>{person.email}</h2>
          </li>
        ))}
      </div>
    </div>
  );
}
