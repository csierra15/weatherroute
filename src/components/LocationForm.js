import React from 'React'

const LocationForm = () => {
  return (
    <form className="locationInputs">
      <label>Starting Location
        <input type="text" />
      </label>
      <label>Destination
        <input type="text" />
      </label>
      <button type="submit">Enter</button>
    </form>
  )
}

export default LocationForm
