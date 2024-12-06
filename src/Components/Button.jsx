const Button = ({onClick, children}) => {
  return (
    <button onClick={onClick} className="card__fav-button">
    {children}
    </button>
  )
}

export default Button