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
      <ul>
        {voiture}
        <li>Abricot</li>
        <li>Banane</li>
        <li>Cerise</li>
        {voitures}
      </ul>
    </>
   );
}

export default App;