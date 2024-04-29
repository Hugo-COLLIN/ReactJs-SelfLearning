

function App() {
  let count = 0;

  const handleIncrement = () => {
    count++;
    console.log(count);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default App
