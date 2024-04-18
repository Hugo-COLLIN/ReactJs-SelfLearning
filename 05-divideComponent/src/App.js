import { useState, useRef } from "react";
import Fruit from './components/Fruit'
import FruitForm from "./components/FruitForm";

function App() {
   // --- STATE ---
   const [fruits, setFruits] = useState([
    {id:1, nom:"Abricot"},
    {id:2, nom:"Banane"},
    {id:3, nom:"Cerise"},
   ]);

   const [newFruit, setNewFruit]  = useState("")



   // --- BEHAVIOURS ---

   /**
    * Modifier le state tableau
    * @param {*} id clé de l'élément à supprimer
    */
   const handleDelete = (id) => {
    setFruits(fruits.filter(fruit => fruit.id !== id));
   }

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
    <>
      <h1>Liste de fruits</h1>
      <ul>
        {fruits.map((fruit) =>  
          <Fruit fruitInfo={fruit} onFruitDelete={handleDelete} />
        )}
      </ul>

       {/* 04.1. Création du formulaire*/}
       <FruitForm newFruit={newFruit} handleSubmit={handleSubmit} handleChange={handleChange}/>
      {/* <form action="submit" onSubmit={handleSubmit}>
        <input 
          value={newFruit} 
          onChange={handleChange} 
          type="text" 
          placeholder="Ajouter un fruit..." 
        />
        
        <button>Ajouter +</button>
      </form> */}
    </>
   );
}

export default App;

// Gestion du formulaire:
// 1. Création
// 2. Soumission
// 3. Collecte des données
// 3a. getElementById-be-like - Ne pas utiliser car ne provoque pas de re-render
// 3b. Méthode de synchro descendante/ascendante