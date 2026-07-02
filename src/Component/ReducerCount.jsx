import React, { useReducer } from "react";

export default function ReducerCount() {
  const initialState = { count: 0 };

  function reducerfunction(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return { count: 0 };
      default:
        return state;
    }
  }
  //action={type:"incerement"}

  const [state, dispatch] = useReducer(reducerfunction, initialState);
  return (
    <div>
      <h1>Count:{state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
}
