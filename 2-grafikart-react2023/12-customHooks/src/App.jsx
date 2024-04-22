/* eslint-disable react/prop-types */

import { useToggle } from "./hooks/useToggle";
import { useIncrement } from "./hooks/useIncrement";

function App() {
  // --- STATE ---
  const [checked, toggleCheck] = useToggle();
  const [counter, increment, decrement] = useIncrement();

  // --- BEHAVIOURS ---

  // --- RENDER ---
  return <div>
    <input type="checkbox" checked={checked} onChange={toggleCheck} />
    {checked && 'Je suis coché'}

    <div>
      <button onClick={decrement}>-</button>
      <input value={counter} readOnly/>
      <button onClick={increment}>+</button>
    </div>
  </div>
}

export default App;