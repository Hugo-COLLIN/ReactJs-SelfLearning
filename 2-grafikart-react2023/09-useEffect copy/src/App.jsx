/* eslint-disable react/prop-types */
import { useState } from "react";
import { Input } from "./components/forms/Input";
import { Checkbox } from "./components/forms/Checkbox"
import { useEffect } from "react";

function App() {
  // --- STATE ---
  const [showInput, setShowInput] = useState(true);
  
  // --- BEHAVIOURS ---

  // --- RENDER ---
  return <div className="container my-3 stack">
    <Checkbox 
      id="stocked" 
      checked={showInput} 
      onChange={setShowInput} 
      label="N'afficher que les procuits en stock"
    />
    { showInput && <EditTitle/> }
    <div style={{height:'300vh'}}></div>
  </div>
}

function EditTitle () {
  // --- STATE ---
  const [title, setTitle] = useState('');
  const [firstname, setFirstname] = useState('');
  const [y, setY] = useState(0.0);

  // --- BEHAVIOURS ---
  // document.title = title;
  // console.log('title');

  // useEffect: EFFETS DE BORD UNIQUEMENT - Effectuer une action uniquement lorsque les props ou états spécifiés sont modifiés
  useEffect(() => {
    document.title = title;
    console.log('title');
  }, [title]);

  // créer un effet de bord : appelé 1 seule fois lorsque le composant est chargé pr la première fois
  useEffect(() => {
    console.log('mounted');

    const handler = (e) => {
      console.log('scroll');
      setY(window.scrollY);
    }

    window.addEventListener('scroll', handler);

    // use return function to clear the listener ; used before rerending
    // si le composant n'est plus dans l'interface après le rerender, cela permet de ne pas avoir l'event inutilement chargé
    return () => {
      window.removeEventListener('scroll', handler);
    }    
  }, []);

  useEffect(() => {
    const originalTitle = document.title;
    
    return () => {
      document.title = originalTitle;
    }
  }, [])

  
// --- RENDER ---
  return <div>
    Scroll: {y}
    <div className="mb-3">
      <Input 
        value={title} 
        onChange={setTitle} 
        placeholder="Modif titre..."
      />
      <Input 
        value={firstname} 
        onChange={setFirstname} 
        placeholder="Prénom..."
      />
      
    </div>
  </div>
}

export default App;