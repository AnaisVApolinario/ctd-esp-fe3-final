const Input = ({
  children,
  type = "text",
  value,
  label,
  placeholder,
  id,
  onChange,
}) => {
  return (
    <div className="input__group field">
      <input
        id={id}
        type={type}
        value={value}
        name={id}
        className="input__field"
        placeholder={placeholder}
        required=""
        onChange={onChange}
      />
      <label htmlFor={id} className="input__label">
        {label}
      </label>
      {children}
    </div>
  );
};

export default Input;
