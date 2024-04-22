import { useState } from "react";

function App() {
  // --- STATE ---

  // On ne peut pas utiliser les hook dans les boucles et les conditions, 
  // car les hooks doivent tjrs etre appelés dnas le même ordre (association d'espaces mémoire)
  // if (personne.age < 19) {
  const [count, setCount] = useState(0);
  // }

  console.log('render'); // affiché 2 fois en mode strict, exécution double pour détecter les bugs
  
  const [personne, setPersonne] = useState({
    firstName: 'John',
    lastName: 'Doe',
    age: 18
  });

  // --- BEHAVIOUR ---
  const increment = () => {
      // Mettre plusieurs fois setCount ne sert à rien car la valeur de count reste identique
      // setCount(count + 1);
      // setCount(count + 1);

      // Pour appeler le setter plusieurs fois (permet de se séparer de la valeur de count) :
      setCount((c) => c + 1);
      setCount((c) => c + 1);
      setCount((c) => c + 1);
  }

  // React: pas de mutation d'objets ou de tableaux, car ignorés. Il faut recréer un nouvel objet
  const incrementAge = () => {
    setPersonne({...personne, age: personne.age + 1});
    // [...todos, 'newTask']
  }


  // --- RENDER ---
  return <>
          <p>Compteur : {count}</p>
          <button onClick={increment}>Incrémenter</button>
          <p>Age de {personne.firstName} : {personne.age}</p>
          <button onClick={incrementAge}>Gagner une année</button>
         </>
}

export default App;