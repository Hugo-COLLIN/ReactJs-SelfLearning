import { useState } from "react";

export default function FruitForm ({fruits, setFruits}) {
    // --- STATE ---
    const [newFruit, setNewFruit]  = useState("")


    // --- BEHAVIOURS ---
    
   /**
    * 04.2. Soumission du formulaire
    * @param {*} event événement déclenché
    */
   const handleSubmit = (event) => {
    event.preventDefault();

    const id = new Date().getTime();
    const nom = newFruit;

    const fruitToAdd = { id, nom };

    setFruits([
      ...fruits, fruitToAdd
    ]);

    setNewFruit("");
   }

   /**
    * Manage the input changes
    * @param {*} event événement déclenché
    */
   const handleChange = (event) => {
    setNewFruit(event.target.value);
   }
 

    // --- RENDER ---
    return (
      <form action="submit" onSubmit={handleSubmit}>
        <input 
          value={newFruit} 
          onChange={handleChange} 
          type="text" 
          placeholder="Ajouter un fruit..." 
        />
        
        <button>Ajouter +</button>
      </form>
    );
}