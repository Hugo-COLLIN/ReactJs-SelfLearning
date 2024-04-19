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
   const handleDelete = (id) => { // Modifier un state tableau
      console.log(id);

      // 1. Copie du state
      // const fruitsCopy = fruits.slice(); // Methode peu utilisée
      const fruitsCopy = [...fruits]; // Méthode commune

      // 2. Manipuler la copie du state
      const fruitsCopyUpdated = 
        fruitsCopy.filter(fruit => fruit.id !== id);

      // 3. Modifier le tate avec le setter
      setFruits(fruitsCopyUpdated);
   }
 
   // render
   return (
    <>
      <h1>Liste de fruits</h1>
      {/* <ul>
        {fruits.map((fruit) => {
          return <li key={fruit.id} >{fruit.nom}</li>
        })}
      </ul> */}
      <ul>
        {fruits.map((fruit) => 
          <li key={fruit.id}>
            {fruit.nom} <button onClick={() => handleDelete(fruit.id)}>x</button>
            </li>
        )}
      </ul>
    </>
   );
}

export default App;