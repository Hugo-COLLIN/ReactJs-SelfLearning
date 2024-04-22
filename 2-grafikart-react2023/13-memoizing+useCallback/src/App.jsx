/* eslint-disable react/prop-types */

import { memo, useCallback, useMemo, useState } from "react";
import { Input } from "./components/forms/Input"

// Memoisation = isolation des composants lents (influence neg sur les perfs) pour ne les rerender que lorsqu'ils sont directement affectés par un changement

function App() {
  // --- STATE ---
  const [name, setName] = useState('');
  const a = useMemo(() => {return {a: 3}}, []); // VARIABLE MEMOISEE

  // --- BEHAVIOURS ---
  // FONCTION MEMOISEE
  const handleClick = useMemo(() => {
    return () => console.log('Hello!!!!!!!');
  });

  // FONCTION MEMOISEE, syntaxe à privilégier
  const handleClick2 = useCallback(() => console.log('Hello!!!!!!!'), [name.length]);

  // --- RENDER ---
  return <div className="container my-2 vstack gap-2">
    <div>
      <Input
        label="Prénom"
        onChange={setName}
        value={name}
      />
      <div>
        {name.toUpperCase()}
      </div>
    </div>
    {/* <Info/> */}
    <InfoMemo/>
    <InfoMemo a={a}/>     {/* 'a' utilise useMemo qui permet que la valeur ne change pas, afin de pouvoir faire la memoisation */}
    <InfoMemo onClick={handleClick}/>     {/* idem avec une fonction memoisée */}
    {/* <InfoMemo name={name} onClick={handleClick}/> Memoisation inutile car on passe un param qui change chaque fois  */}
  </div>
}

// function Info () {
//   setTimeout(() => {}, 500)
//   return <div className="alert alert-info">
//     Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
//     Ad necessitatibus tenetur hic nostrum aut ipsa asperiores tempore, doloribus et. 
//     Esse ea, consequatur perspiciatis assumenda ipsum maiores quam soluta minima iure.
//   </div>
// }

const InfoMemo = memo(function Info(a) {
  console.log('Info', 'render');
  setTimeout(() => {}, 500);
  return <div className="alert alert-info">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Ad necessitatibus tenetur hic nostrum aut ipsa asperiores tempore, doloribus et. 
    Esse ea, consequatur perspiciatis assumenda ipsum maiores quam soluta minima iure.
  </div>
})


export default App;