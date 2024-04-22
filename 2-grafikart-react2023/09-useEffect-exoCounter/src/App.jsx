/* eslint-disable react/prop-types */
import { useState } from "react";
import { useEffect } from "react";
import { Input } from "./components/forms/Input";

function App() {
  // --- STATE ---
  const [durationSeconds, setDurationSeconds] = useState(5);
  const [secondsLeft, setSecondsLeft] = useState(durationSeconds);
  
  // --- BEHAVIOURS ---
  const handleChange = (v) => {
    setDurationSeconds(v);
    setSecondsLeft(v)
  }

  useEffect(() => {
    // setTimeout(() => {
    //   console.log(`Timer de ${durationSeconds} secondes écoulé`);
    // }, durationSeconds * 1000);

    // setSecondsLeft(duration) // Mauvaise idée, le composant est du coup rerendu 2 fois de suite - NE PAS METTRE DE SETTER A LA RACINE D'UN 
    const timer = setInterval(() => {
      // setSecondsLeft((s) => s - 1);
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(timer);
          return 0;
        }
        return s - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [durationSeconds])


  // --- RENDER ---
  return <div className="container my-3 stack">
    <Input
      placeholder="Timer"
      value={durationSeconds}
      // onChange={setDurationSeconds}
      onChange={handleChange}
    />
    Décompte: {secondsLeft}
  </div>
}

export default App;