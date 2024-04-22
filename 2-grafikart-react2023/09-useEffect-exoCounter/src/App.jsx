/* eslint-disable react/prop-types */
import { useState } from "react";
import { useEffect } from "react";
import { Input } from "./components/forms/Input";
import { Checkbox } from "./components/forms/Checkbox"

function App() {
  // --- STATE ---
  const [durationSeconds, setDurationSeconds] = useState(5);
  
  // --- BEHAVIOURS ---
  useEffect(() => {
    setTimeout(() => {
      console.log(`Timer de ${durationSeconds} secondes écoulé`);
    }, durationSeconds * 1000);
  }, [durationSeconds])

  // --- RENDER ---
  return <div className="container my-3 stack">
    <Input
      placeholder="Timer"
      value={durationSeconds}
      onChange={setDurationSeconds}
    />
  </div>
}

export default App;