/* eslint-disable react/prop-types */

import { useToggle } from "./hooks/useToggle";
import { useIncrement } from "./hooks/useIncrement";
import { useState } from "react";
import { useDocumentTitle } from "./hooks/useDocumentTitle";
import { Input } from "./components/forms/Input"


function App() {
  // --- STATE ---
  const [checked, toggleCheck] = useToggle();

  // const [count, increment, decrement] = useIncrement(5);
  const {count, increment, decrement} = useIncrement({
    base: 0,
    max:10,
    min:0
  });

  const [name, setName] = useState('');

  // --- BEHAVIOURS ---
  useDocumentTitle('Editer ' + name)

  // --- RENDER ---
  return <div>
    <input type="checkbox" checked={checked} onChange={toggleCheck} />
    {checked && 'Je suis coché'}

    <div>
      <button onClick={decrement}>-</button>
      <input value={count} readOnly/>
      <button onClick={increment}>+</button>
    </div>
    {name}
    <Input value={name} onChange={setName} label="Nom"/>
  </div>
}

export default App;