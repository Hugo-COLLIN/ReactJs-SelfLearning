/* eslint-disable react/prop-types */

import { useToggle } from "./hooks/useToggle";

// Une fonction qui uilise un hook est un hook !!!



function App() {
  // --- STATE ---
  const [checked, toggleCheck] = useToggle();

  // --- BEHAVIOURS ---

  // --- RENDER ---
  return <div>
    <input type="checkbox" checked={checked} onChange={toggleCheck} />
    {checked && 'Je suis coché'}
  </div>
}

export default App;