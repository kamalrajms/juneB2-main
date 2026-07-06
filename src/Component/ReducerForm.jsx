import React, { useReducer } from "react";

export default function ReducerForm() {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };

  function formReducer(state, action) {
    return {
      ...state, //previous data
      [action.field]: action.value, //updated data
    };
  }

  //   action={
  //       field: e.target.name,
  //       value: e.target.value,
  //     }

  const [state, dispatch] = useReducer(formReducer, initialState);
  function handleChange(e) {
    dispatch({
      field: e.target.name,
      value: e.target.value,
    });
  }
  return (
    <div>
      <h2>Reducer Form</h2>
      <input
        type="text"
        name="name"
        value={state.name}
        onChange={handleChange}
        placeholder="enter a name"
      />
      <input
        name="email"
        type="email"
        value={state.email}
        onChange={handleChange}
        placeholder="enter a email"
      />
      <input
        name="password"
        type="password"
        value={state.password}
        onChange={handleChange}
        placeholder="enter a password"
      />
    </div>
  );
}
