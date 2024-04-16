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
          <li key={fruit.id} >{fruit.nom}</li>
        )}
      </ul>
    </>
   );
}

export default App;