const showTitle = false;
const title = "Hello <strong>world</strong>";
const style = { color: 'red', backgroundColor: 'blue' };

const todos = [
  'hey',
  'une todo?',
  'génial!'
]


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
          <Titre color="green" id="myid" className="demoClass" data-demo="demo">Mon composant</Titre> {/*hidden*/}

          { showTitle 
            ? <h1 className={title} style={style} onClick={handleClick}>{title}</h1>
            : <p>demo</p>
          }

          {!showTitle && <Input backgroundColor='red'/>}

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, eaque. 
            Repudiandae voluptatibus optio alias impedit quaerat velit praesentium nemo repellat, et illo facere natus libero nihil vero tempore quo non.
          </p>

          <ul>
            {todos.map(todo => <li key={todo}>{todo}</li>)}
          </ul>
         </>
}

// function Input (props) {
// eslint-disable-next-line react/prop-types
function Input ({backgroundColor}) {
  // console.log(props);
  return <input type="text" style={{backgroundColor}}/>
}

// eslint-disable-next-line react/prop-types
function Titre ({color, children, hidden, ...props}) {
  // console.log(props);
  console.log(hidden);

  if (hidden) // true ou undefined
    return null;

  const manualProps = {
    id: 'monid',
    className: 'maclasse'
  }

  // return <h1 style={{color}} {...props} {...manualProps}>{children}</h1>
  return <h1 style={{color}} {...props} {...manualProps}></h1>
}

export default App;