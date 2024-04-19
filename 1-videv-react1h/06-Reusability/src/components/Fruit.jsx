// export default function Fruit(props){
export default function Fruit({fruitInfo, onClick}){
    // -- STATE ---

    // --- BEHAVIOURS ---

    // --- RENDER ---
    return (
        <li>
          {fruitInfo.nom}{" "}
          <button onClick={onClick}>x</button>
        </li>
    )
}