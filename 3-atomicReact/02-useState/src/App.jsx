import { useState } from "react";


function App() {
  // <!> 1 SEUL STATE pour le composant (ici App), useState ajoute des props au state
  // avec le state, au lieu d'altérer la donnée, on la remplace (avantage de l'immutabilité: intégrité des données, pas de side-effects(?)...)
  const [count, setCount] = useState(0); // hook: utiliser l'état
  // let count = 0; // count => update => interface
  const [michel, pascal] = useState(null);
  const [title, setTitle] = useState("Hello hello");

  const [article, setArticle] = useState({
    title: "Mon article",
    content: "Contenu de mon article",
  });

  const [ numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const [ time, setTime] = useState(0);

  const handleIncrement = () => {
    // count++;
    setCount(count + 1);
    setCount((c) => c + 1);
    console.log(count);
  }

  const handleChangeTitle = () => {
    setTitle("Hello world");

    // <!> ne fonctionne pas
    // numbers.push(6); 
    // setNumbers(numbers)

    // fonctionne
    const numbersCopy = [...numbers];
    numbersCopy.push(6);
    setNumbers(numbersCopy);

    // encore mieux
    setNumbers([...numbers, 6]); 

    //on remplace intégraklement le tabelau initial
  }

  const handleLaunchClock = () => {
    setInterval(() => {
      console.log('TIME', time);
      // setTime(time + 1); // setInterval s'exécute en parallèle du reste, time vaut toujours 0 pour lui, même s'il a été mis a jour dans le composant
      // setTime(t => {
      //   console.log('PREV_TIME', t);
      //   return t + 1
      // });
      setTime(t => t + 1);
    }, 1000);
  }

  return (
    <>
      <h1>{title}</h1>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleChangeTitle}>Change title</button>
      <h2>Clock: {time}</h2>
      <button onClick={handleLaunchClock}>Launch clock</button>
    </>
  )
}

export default App
