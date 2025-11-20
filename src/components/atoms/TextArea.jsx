function TextArea({ name, value, onChange, placeholder, rows = 4 }) {
  return (
    <div className="inputform">
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className="form-control"
      ></textarea>
    </div>
  );
}

export default TextArea;
