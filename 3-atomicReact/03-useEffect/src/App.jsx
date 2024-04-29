import { useState } from "react";
import Article from "./components/Article";


function App() {
  const [display, setDisplay] = useState(false);

  const toggle = () => {
    setDisplay(!display)
  }

  return (
    <>
      <button onClick={toggle}>Show/hide</button>
      {display && <Article/>}
    </>
  )
}

export default App
