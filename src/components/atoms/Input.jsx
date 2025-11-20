function Input({ label, name, type = "text", value, onChange, placeholder }) {
  return (
    <div className="mb-3">
      {label && <label htmlFor={name} className="form-label">{label}</label>}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="form-control"
      />
    </div>
  );
}

export default Input;

