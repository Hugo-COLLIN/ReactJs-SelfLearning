/* eslint-disable react/prop-types */

import { useToggle } from "./hooks/useToggle";
import { useIncrement } from "./hooks/useIncrement";
import { useState } from "react";
import { useDocumentTitle } from "./hooks/useDocumentTitle";
import { Input } from "./components/forms/Input"
import { useFetch } from "./hooks/useFetch";

// function App() {
//   // --- STATE ---
//   const [checked, toggleCheck] = useToggle();
//   // const [count, increment, decrement] = useIncrement(5);
//   const {count, increment, decrement} = useIncrement({
//     base: 0,
//     max:10,
//     min:0
//   });
//   const [name, setName] = useState('');
//   // --- BEHAVIOURS ---
//   useDocumentTitle(name ? `Editer ${name}` : null)
//   // --- RENDER ---
//   return <div>
//     <input type="checkbox" checked={checked} onChange={toggleCheck} />
//     {checked && 'Je suis coché'}
//     <div>
//       <button onClick={decrement}>-</button>
//       <input value={count} readOnly/>
//       <button onClick={increment}>+</button>
//     </div>
//     {name}
//     <Input value={name} onChange={setName} label="Nom"/>
//   </div>
// }

function App() {
  // --- STATE ---
  const {loading, data, errors} = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10&_delay=2000')

  // --- BEHAVIOURS ---

  // --- RENDER ---
  return <div>
    {loading && <div className="snipper-border" role="status">Chargement...</div>}
    {errors && <div className="alert alert-danger">{errors.toString()}</div>}
    { data && <div>
      {/* {JSON.stringify(data)} */}
      <ul>
        {data.map(post =>(<li key={post.id}>{post.title}</li>))}
      </ul>
    </div>}
  </div>
}

export default App;