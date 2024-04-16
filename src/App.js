import { useState } from "react";

function App() {
   // state
   const [count, setCount] = useState(1);

   // behaviours

   // render
   return (
    <>
      <h1>{count}</h1>
      <button>Increment +</button>
    </>
   );
}

export default App;