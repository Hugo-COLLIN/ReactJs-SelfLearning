import { useState } from "react";

/**
 * Toogle a boolean
 * @param {boolean} initial 
 */
export function useToggle (initial) {
    const [state, setState] = useState(initial);
    const toggle = () => setState(v => !v);
    return [state, toggle];
}