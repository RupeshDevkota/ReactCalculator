export const Form = ({ value, onSubmitValue, handlechange }) => {
  return (
    <form onSubmit={onSubmitValue}>
      <input type="text" value={Value} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};
