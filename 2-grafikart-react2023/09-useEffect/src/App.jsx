/* eslint-disable react/prop-types */
import { useState } from "react";
import { Checkbox } from "./components/forms/Checkbox";
import { Input } from "./components/forms/Input";
import { ProductCategoryRow } from "./components/products/ProductCategoryRow";
import { ProductRow } from "./components/products/ProductRow";
import { useEffect } from "react";

const PRODUCTS = [
  { category: 'Fruits', price: "$1", stocked: true, name: "Apple" },
  { category: 'Fruits', price: "$0.5", stocked: true, name: "Banana" },
  { category: 'Fruits', price: "$2.5", stocked: false, name: "Orange" },
  { category: 'Vegetables', price: "$2", stocked: false, name: "Carrot" },
  { category: 'Vegetables', price: "$1.5", stocked: true, name: "Tomato" },
  { category: 'Vegetables', price: "$3", stocked: true, name: "Broccoli" }
];

function App() {
  // --- STATE ---
  
  // --- BEHAVIOURS ---

  // --- RENDER ---
  return <div className="container my-3">
    {/* <Checkbox 
        id="stocked" 
        checked={showStockedOnly} 
        onChange={onStockedOnlyChange} 
        label="N'afficher que les procuits en stock"
      /> */}
    <EditTitle/>
  </div>
}

function EditTitle () {
  const [title, setTitle] = useState('');
  const [firstname, setFirstname] = useState('');

  useEffect(() => {

  }, [])

  return <div>
    <div className="mb-3">
      <Input 
      value={title} onChange={setTitle} placeholder="Rechercher..."/>
      <Input 
      value={firstname} onChange={setFirstname} placeholder="Rechercher..."/>
      
    </div>
  </div>
}

export default App;