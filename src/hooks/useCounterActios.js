import { useState } from "react";

const useCounterActions = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const reset = () => setCounter(0);

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};

export default useCounterActions;
