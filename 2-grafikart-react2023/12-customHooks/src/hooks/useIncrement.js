import { useState } from "react";

// Une fonction qui uilise un hook est un hook !!!
export function useIncrement({base = 0, max = Infinity, min = -Infinity}) {
  const [state, setState] = useState(base);
  const increment = () => setState(v => v < max ? v + 1 : v);
  const decrement = () => setState(v => v > min ? v - 1 : v);

  // return [count, increment, decrement];
  return {count: state, increment, decrement};
}
