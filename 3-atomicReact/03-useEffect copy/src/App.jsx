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

  // ---

  const [article, setArticle] = useState(null);
    
  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts/1')
          .then(resp => resp.json())
          .then(data => {
            setArticle(data)
            console.log(data);
          })
          .catch(console.error)
  }, [])

  return (
    <>
      <p>Opened: {openedArticleCount}</p>
      <button onClick={toggle}>{display ? 'Hide' : 'Show'} article</button>
      {display && article && 
        <Article title={article.title}>
          <p>
            { article.body }
          </p>
        </Article>
      }
    </>
  )
}

export default App
