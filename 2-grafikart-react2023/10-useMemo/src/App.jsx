/* eslint-disable react/prop-types */
import { useState, useMemo, useId } from "react";
import { Input } from "./components/forms/Input";


// useMemo : Changer une valeur seult si une dépendance (valeur, état) change
function App() {
  // --- STATE ---
  const [firstName, setFirstName] = useState('John');
  const [password, setPassword] = useState('MDP');
  
  // --- BEHAVIOURS ---
  // const security = passwordSecurity(password); // la lenteur de la métyhode affecte/ralentit tout le composant
  const security = useMemo(() => {
    console.log('hello');
    return passwordSecurity(password);
  }, [password]);

  const random = useMemo(() => Math.random(), [])

  // console.log(useId());

  // --- RENDER ---
  return <div className="container my-3 stack">
    {random}
    <Input
      label="Nom utilisateur"
      placeholder="Nom utilisateur"
      value={firstName}
      onChange={setFirstName}
    />
    <br/>
    <Input
      label="Password"
      placeholder="PWD"
      value={password}
      onChange={setPassword}
    />
    Sécurité : {security}
  </div>
}

function passwordSecurity (password) {
  let startTime = performance.now();
  while (performance.now() - startTime < 200) {} // simule une lenteur

  if (password.length < 3)
    return 'Faible';
  else if (password.length < 6)
    return 'Moyen';


}

export default App;