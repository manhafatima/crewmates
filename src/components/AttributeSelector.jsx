function AttributeSelector({ label }) {
  return (
    <>
      <h3>{label}</h3>

      {[1, 2, 3, 4, 5].map((num) => (
        <label key={num}>
          <input
            type="radio"
            name={label}
          />
          {num}
        </label>
      ))}
    </>
  );
}

export default AttributeSelector;