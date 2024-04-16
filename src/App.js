import { useState } from "react";

function App() {
   // state
   const [count, setCount] = useState(41);

   // behaviours

   // render
   return <h1>{count}</h1>
}

export default App;