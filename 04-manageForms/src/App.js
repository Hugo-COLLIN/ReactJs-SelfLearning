import { useState } from "react";

function App() {
   // state
   const [fruits, setFruits] = useState([
    {id:1, nom:"Abricot"},
    {id:2, nom:"Banane"},
    {id:3, nom:"Cerise"},
   ])

   const voiture = <li>Tesla</li>;
   const voitures = [
    <li>Audi</li>,
    <li>BM</li>,
    <li>Clio</li>,
  ]


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
    alert("handleSubmit");
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
        <input type="text" placeholder="Ajouter un fruit..." />
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