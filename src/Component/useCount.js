import { useState } from "react";

function useCount(value) {
  const [count, setCount] = useState(value);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(value);
  };

  return { count, increment, decrement, reset };
}
export default useCount;
