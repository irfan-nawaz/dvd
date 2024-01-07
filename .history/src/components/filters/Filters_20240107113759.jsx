const Filters = ({ onAgeChange, onGenderChange }) => {
  return (
    <div>
      <label>
        Age:
        <select onChange={(e) => onAgeChange(e.target.value)}>
          <option value="15-25">15-25</option>
          <option value=">25">25</option>
        </select>
      </label>
      <label>
        Gender:
        <select onChange={(e) => onGenderChange(e.target.value)}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </label>
    </div>
  )
}

export default Filters
