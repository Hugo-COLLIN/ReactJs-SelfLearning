const Button = (props) => {
    return <button disabled={props.disabled}>{ props.children }</button>
}

export default Button;