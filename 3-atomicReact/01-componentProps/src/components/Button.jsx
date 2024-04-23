// const Button = (props) => {
//     const { isLoading, children, ...others } = props;

//     console.log(others);


//     // return <button onClick={props.onClick} disabled={props.disabled}>{ props.children }</button>

//     //Spread operator
//     // return <button {...props}></button>
//     // return <button {...props}>{props.isLoading ? 'Loading...' : props.children}</button>
//     return <button {...props}>
//             { isLoading 
//                 ? 'Loading...' 
//                 : children
//             }
//         </button>
// }


const Button = ({ isLoading = false, children = null, ...others }) => {
    return <button {...others}>
            { isLoading 
                ? 'Loading...' 
                : children
            }
        </button>
}

export default Button;