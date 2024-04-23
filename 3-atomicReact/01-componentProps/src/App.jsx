import { useState } from 'react'
import Article from './components/Article'
import ArticleComposition from './components/ArticleComposition'

function App() {

  return (
    <>
      <h1>Comprendre les props</h1>
      <Article id={1} title="Hello Worldds"/>
      <Article id={2} title="Hello moon"/>
      {
        Article({
          title: 'hey'
        })
      }

      <ArticleComposition id={ 4 } title='Abricot'>
        <p>
          <strong>Moon Lorem</strong> ipsum dolor sit amet consectetur, adipisicing elit. Adipisci necessitatibus ducimus vero officiis fugiat est quaerat! Sed excepturi facere consectetur expedita possimus? Assumenda numquam ut vel quisquam officia itaque consequatur.
        </p>
      </ArticleComposition>

      <ArticleComposition id={ 5 } title='Abricot'>
        <p>
          <strong>Sun Lorem</strong> ipsum dolor sit amet consectetur, adipisicing elit. Adipisci necessitatibus ducimus vero officiis fugiat est quaerat! Sed excepturi facere consectetur expedita possimus? Assumenda numquam ut vel quisquam officia itaque consequatur.
        </p>
      </ArticleComposition>
    </>
  )
}

export default App
