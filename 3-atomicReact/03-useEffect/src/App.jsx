import { useState, useEffect } from "react";
import Article from "./components/Article";


function App() {
  const [openedArticleCount, setOpenedArticleCount] = useState(0);
  const [display, setDisplay] = useState(false);


  useEffect(() => {
      if (display)
          setOpenedArticleCount(c => c + 1)
  }, [display])
  

  const toggle = () => {
      setDisplay(!display)
  }

  return (
    <>
      <p>Opened: {openedArticleCount}</p>
      <button onClick={toggle}>Show/hide</button>
      {display && <Article/>}
    </>
  )
}

export default App
