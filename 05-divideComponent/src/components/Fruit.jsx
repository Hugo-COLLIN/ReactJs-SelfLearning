// export default function Fruit(props){
export default function Fruit({fruitInfo, onFruitDelete}){
    // -- STATE ---
    // const fruitInfo = props.fruitInfo;
    // const onFruitDelete = props.onFruiDelete;

    // const {fruitInfo, onFruitDelete} = props;


    // --- BEHAVIOURS ---


    // --- RENDER ---
    return (
        <li>
          {fruitInfo.nom}{" "}
          <button onClick={() => onFruitDelete(fruitInfo.id)}>x</button>
        </li>
    )
}