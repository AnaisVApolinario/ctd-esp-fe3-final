const Button = ({onClick, text, children}) => {
  return (
    <button onClick={onClick} className="card__fav-button">
    {text} {children}
    </button>
  )
}

export default Button