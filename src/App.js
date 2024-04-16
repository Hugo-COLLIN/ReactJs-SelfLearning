import { useState } from "react";

function App() {
   // state
   const [count, setCount] = useState(1);

   // behaviours
   const handleClick = () => {
    console.log(count);
    setCount(count + 1);
    console.log(count);
   }

   // render
   return (
    <>
      <h1>{count}</h1>
      <button onClick={handleClick}>Increment +</button>
      <button onClick={() => alert("2222")}>test</button>
    </>
   );
}

export default App;