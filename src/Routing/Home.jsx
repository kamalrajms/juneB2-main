import React, { useEffect, useState } from "react";
import UseIdHook from "../Component/UseIdHook";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [count, setCount] = useState(0);
  const page = useNavigate();
  useEffect(()=>{
    if(count>=10){
        page("/Contact")
    }
  },[count])
  return (
    <div>
      <h2>Count={count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => page("/Contact")}>Move to contact</button>
      <h2>Home component</h2>
      <UseIdHook />
      <UseIdHook />
    </div>
  );
}
