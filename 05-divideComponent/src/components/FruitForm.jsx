export default function FruitForm ({newFruit, handleSubmit, handleChange}) {
    // --- STATE ---

    // --- BEHAVIOURS ---

    // --- RENDER ---
    return (
      <form action="submit" onSubmit={handleSubmit}>
        <input 
          value={newFruit} 
          onChange={handleChange} 
          type="text" 
          placeholder="Ajouter un fruit..." 
        />
        
        <button>Ajouter +</button>
      </form>
    );
}