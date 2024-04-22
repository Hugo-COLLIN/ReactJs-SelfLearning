/* eslint-disable react/prop-types */
/* eslint-disable-next-line react/prop-types */
import { forwardRef } from "react"
import { useId } from "react"

/**
 * 
 * @param {string} placeholder 
 * @param {string} value 
 * @param {(s: string) => void} onChange 
 */
// export function Input ({placeholder, value, onChange, label, inputRef, wrapperRef, labelRef}) {
//     console.log('input', inputRef);
//     const id = useId();
//     return <div ref={wrapperRef}>
//         <label className="form-label" htmlFor={id} ref={labelRef}>{label}</label>
//         <input 
//             ref={inputRef}
//             id={id}
//             type="text" 
//             className="form-control"
//             value={value}
//             onChange={(e) => onChange(e.target.value)}
//             placeholder={placeholder}
//         />
//     </div>
// }

// Utilisation des refs standard html
// export const Input = forwardRef(function Input ({placeholder, value, onChange, label}, ref) {
export const Input = forwardRef( ({placeholder, value, onChange, label}, ref) => {
    const id = useId();
    return <div>
        <label className="form-label" htmlFor={id}>{label}</label>
        <input 
            ref={ref}
            id={id}
            type="text" 
            className="form-control"
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            placeholder={placeholder}
        />
    </div>
})

Input.displayName = 'Input' // Nommer le composant si on utilise une fonction fléchée - cf. devTools > Components (React devtools)