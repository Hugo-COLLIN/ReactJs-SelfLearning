import { useState, useRef } from "react";

function App() {
   // state
   const [fruits, setFruits] = useState([
    {id:1, nom:"Abricot"},
    {id:2, nom:"Banane"},
    {id:3, nom:"Cerise"},
   ])

   const inputRef = useRef();


   // behaviours
   /**
    * Modifier le state tableau
    * @param {*} id clé de l'élément à supprimer
    */
   const handleDelete = (id) => {
    const fruitsCopy = [...fruits];
      
    const fruitsCopyUpdated = 
      fruitsCopy.filter(fruit => fruit.id !== id);

    setFruits(fruitsCopyUpdated);
   }

   /**
    * 04.2. Soumission du formulaire
    * @param {*} event événement
    */
   const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputRef);
    console.log(inputRef.current);
    console.log(inputRef.current.value);
   }
 
   // render
   return (
    <>
      <h1>Liste de fruits</h1>
      <ul>
        {fruits.map((fruit) => 
          <li key={fruit.id}>
            {fruit.nom} <button onClick={() => handleDelete(fruit.id)}>x</button>
            </li>
        )}
      </ul>

       {/* 04.1. Création du formulaire*/}
      <form action="submit" onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" placeholder="Ajouter un fruit..." />
        <button>Ajouter +</button>
      </form>
    </>
   );
}

export default App;

// Gestion du formulaire:
// 1. Création
// 2. Soumission
// 3. Collecte des données
// 3a. getElementById-be-like - Ne pas utiliser car ne provoque pas de re-render
// 3b. 