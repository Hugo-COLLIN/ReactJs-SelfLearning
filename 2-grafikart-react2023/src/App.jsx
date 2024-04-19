const title = "Hello <strong>world</strong>";
const style = { color: 'red', backgroundColor: 'blue' };


function App() {
  // --- STATE ---

  // --- BEHAVIOUR ---
  const handleClick = (e) => {
    console.log(e);
    e.preventDefault();
    e.stopPropagation();
    alert("Title clicked!")
  }

  // --- RENDER ---
  return <>
          <h1 className={title} style={style} onClick={handleClick}>{title}</h1>
          <input type="text"/>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, eaque. 
            Repudiandae voluptatibus optio alias impedit quaerat velit praesentium nemo repellat, et illo facere natus libero nihil vero tempore quo non.
          </p>
         </>
}

export default App;