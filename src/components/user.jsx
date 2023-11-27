function User({selectValue, handleChange}) {
  return (
    <div className="user">
      <select name="" value={selectValue} onChange={handleChange} id="">
        <option value="Junior">Junior</option>
        <option value="Richard">Richard</option>
      </select>
    </div>
  );
}

export default User;
