/* eslint-disable react/prop-types */
import { useState } from "react";
import { Checkbox } from "../../07-dataStream/src/components/forms/Checkbox";
import { Input } from "../../07-dataStream/src/components/forms/Input";
import { ProductCategoryRow } from "../../07-dataStream/src/components/products/ProductCategoryRow";
import { ProductRow } from "../../07-dataStream/src/components/products/ProductRow";

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
  const [showStockedOnly, setShowStockedOnly] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  // --- BEHAVIOURS ---

  // --- RENDER ---
  return <div className="container my-3">
    <SearchBar 
      showStockedOnly={showStockedOnly} 
      onStockedOnlyChange={setShowStockedOnly} 
      searchValue={searchValue}
      onSearchChange={setSearchValue}
    />
    <ProductTable products={PRODUCTS}/>
  </div>
}

function SearchBar ({showStockedOnly, onStockedOnlyChange, searchValue, onSearchChange}) {
  return <div>
    <div className="mb-3">
      <Input 
      value={searchValue} onChange={onSearchChange} placeholder="Rechercher..."/>
      <Checkbox 
        id="stocked" 
        checked={showStockedOnly} 
        onChange={onStockedOnlyChange} 
        label="N'afficher que les procuits en stock"
      />
    </div>
  </div>
}

function ProductTable ({products}) {
  // --- STATE ---
  const rows = [];
  let lastCategory = null;

  // --- BEHAVIOURS ---
  for (let product of products) {
    if (product.category !== lastCategory) 
      rows.push(<ProductCategoryRow key={product.category} name={product.category}/>);

    lastCategory = product.category;
    rows.push(<ProductRow product={product} key={product.name}/>)
  }

  // --- RENDER ---
  return <table className="table">
    <thead>
      <tr>
        <th>Nom</th>
        <th>Prix</th>
      </tr>
    </thead>
    <tbody>
      {rows}
    </tbody>
  </table>
}


export default App;