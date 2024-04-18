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

   // --- BEHAVIOURS ---

   /**
    * Modifier le state tableau
    * @param {*} id clé de l'élément à supprimer
    */
   const handleDelete = (id) => {
    setFruits(fruits.filter(fruit => fruit.id !== id));
   }

   const handleAdd = (fruitToAdd) => {
    setFruits([
      ...fruits, fruitToAdd
    ]);
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
       {/* <FruitForm fruits={fruits} setFruits={setFruits} /> */}
       <FruitForm handleAdd={handleAdd} />
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