import { useState } from "react";

// Une fonction qui uilise un hook est un hook !!!
export function useIncrement(initialValue) {
  const [count, setCount] = useState(initialValue ?? 0);
  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);

  return [count, increment, decrement];
}
