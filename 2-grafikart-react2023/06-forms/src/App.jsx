
// Champ controlé : maj elt interface lorsque user écrit dans le champ
// import { useState } from "react";

// function App() {
//   // --- STATE ---
// const [firstname, setFirstname] = useState('John Doe');

//   // --- BEHAVIOUR ---
//   const handleChange = (e) => {
//     setFirstname(e.target.value);
//   }

//   const reset = () => {
//     setFirstname('');
//   }

//   console.log('render');

 
//   // --- RENDER ---
//   return <>
//           <input type="text" name="firstname" value={firstname} onChange={handleChange}/>
//           {firstname}
//           <button onClick={reset} type="button">Reset</button>
//          </>
// }

// Champ non-controlé: Frappe libre, juste récupérer les valeurs
// éviter le re-rendu à chaque frappe au clavier :
// function App() {
//   // --- STATE ---

//   // --- BEHAVIOUR ---
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(new FormData(e.target));
//   }
//   // Get value : 
//   // 1. FormData {} > right-click > store as global value
//   // 2. temp1.get('firstname')

//   console.log('render');
 
//   // --- RENDER ---
//   return <form onSubmit={handleSubmit}>
//           <input type="text" name="firstname" defaultValue={'test'}/>
//           <button>Envoyer</button>
//          </form>
// }


import { useState } from "react";


function App() {
  // --- STATE ---
  // const [value, setValue] = useState(undefined); // Warning: A component is changing an uncontrolled input to be controlled.
  const [value, setValue] = useState('');
  const [checked, setChecked] = useState(true);

  // --- BEHAVIOUR ---
  const handleChange = (e) => {
    setValue(e.target.value);
  }

  console.log('render');

  const toggleCheck = () => {
    setChecked(!checked);
  }

 
  // --- RENDER ---
  return <>
          <input type="text" name="firstname" value={value} onChange={handleChange}/>
          <textarea value={value} onChange={handleChange}/>
          <input type="checkbox" checked={checked} onChange={toggleCheck}/>
          <button type="button">Envoyer</button>
         </>
}

export default App;