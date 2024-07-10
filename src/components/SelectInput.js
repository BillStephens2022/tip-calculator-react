export default function SelectInput({ tipOptions, tip, setTip, children }) {
  return (
    <div className="form-group">
      <label htmlFor="tip">{children}</label>
      <select value={tip} onChange={(e) => setTip(e.target.value)} id="tip">
        {tipOptions.map((option, index) => (
          <option key={index} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
}
