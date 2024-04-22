/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { useRef } from "react";
import { Input } from './components/forms/Input'



// function App() {
//   // --- STATE ---
//   const prefixRef = useRef(null);
//   // Equivalent à :
//   // const prefixRef = useMemo(() => ({current: null}), [])
//   const [prefix, setPrefix] = useState('');
//   prefixRef.current = prefix;

//   console.log(prefixRef);

//   // --- BEHAVIOURS ---
//   useEffect(() => {
//     // console.log(ref.current.offsetHeight);

//     const timer = setInterval(() => {
//       console.log(prefixRef.current);
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);
//   // }, [prefix]);

//   // --- RENDER ---
//   // return <div onClick={() => ref.current = 'hello'}>
//   return <div ref={prefixRef}>
//     <Input
//       label="prefix"
//       value={prefix}
//       onChange={setPrefix}
//     />
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//     Maxime voluptate quis quos, provident assumenda reiciendis numquam magnam. 
//     Corporis alias dolor eaque doloribus officia ipsa quidem nam excepturi error. 
//     Consectetur, illo!
//   </div>
// }

function App() {
  // --- STATE ---
  const [prefix, setPrefix] = useState('');

  const ref = useRef();
  console.log("App", ref);

  // --- BEHAVIOURS ---
  useEffect(() => {
    if (ref.current) {
      //...
    }
  })

  // --- RENDER ---
  return <div>
    {/* <Input inputRef={ref} label="prefix" /> */}
    <Input ref={ref} label="prefix" value={prefix} onChange={setPrefix} />
    {prefix.length === 0 && <div ref={ref}>hello</div>}
  </div>
}

export default App;