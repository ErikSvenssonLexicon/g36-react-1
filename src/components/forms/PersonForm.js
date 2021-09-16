import { useState } from "react";
import { createPerson } from "../object-factories/factoryFunctions";

const PersonForm = (props) => {
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [birthDateValue, setBirthDateValue] = useState("");

  const min = "1910-01-01";
  const max = "2021-09-15";

  function handleSubmit(event) {
    event.preventDefault();

    //Create person
    const person = createPerson(firstNameValue, lastNameValue, birthDateValue);
    //Call handle method passed down through props
    props.handleAddPerson(person);
    //Clear the input values
    setFirstNameValue("");
    setLastNameValue("");
    setBirthDateValue("");
  }

  function handleFirstNameChange(event) {
    setFirstNameValue(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastNameValue(event.target.value);
  }

  function handleBirthDateChange(event) {
    setBirthDateValue(event.target.value);
  }

  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="row g-2 mb-2">
            <div className="col">
              <div className="form-floating">
                <input
                  onChange={handleFirstNameChange}
                  value={firstNameValue}
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="Enter your first name..."
                />
                <label htmlFor="firstName">First Name</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating">
                <input
                  onChange={handleLastNameChange}
                  value={lastNameValue}
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Enter your last name..."
                />
                <label htmlFor="lastName">First Name</label>
              </div>
            </div>
          </div>
          <div className="form-floating mb-2">
            <input
              onChange={handleBirthDateChange}
              value={birthDateValue}
              type="date"
              className="form-control"
              id="birthDate"
              min={min}
              max={max}
              placeholder="YYYY-MM-DD"
            />
            <label htmlFor="birthDate">Birth Date</label>
          </div>

          <div className="d-grid mb-2">
            <button className="btn btn-primary" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonForm;
