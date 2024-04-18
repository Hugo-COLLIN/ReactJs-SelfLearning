export default function Fruit(props){
    // -- STATE ---


    // --- BEHAVIOURS ---


    // --- RENDER ---
    return (
        <li key={props.fruitInfo.id}>
          {props.fruitInfo.nom} 
          <button onClick={() => props.onFruitDelete(props.fruitInfo.id)}>x</button>
        </li>
    )
}