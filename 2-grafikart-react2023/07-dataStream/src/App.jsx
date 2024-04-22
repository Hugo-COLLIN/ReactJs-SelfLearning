import { useState } from "react";


function App() {
  // --- STATE ---
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  // --- BEHAVIOUR ---
  
  // --- RENDER ---
  return <form>
          <CGUCheckbox checked={isTermsAccepted} onCheck={setIsTermsAccepted}/>
          <button disabled={!isTermsAccepted}>Envoyer le formulaire</button>
         </form>
}


// eslint-disable-next-line react/prop-types
function CGUCheckbox({checked, onCheck}) {
  return <div>
    <label>
      <input 
        type="checkbox" 
        onChange={(e) => onCheck(e.target.checked)}
        checked={checked}/>
      Accepter les CGU
    </label>
  </div>
}

export default App;