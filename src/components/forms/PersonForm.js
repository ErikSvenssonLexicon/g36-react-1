const PersonForm = () => {
  const min = "1910-01-01";
  const max = "2021-09-15";

  return (
    <div className="card">
      <div className="card-body">
        <form>
          <div className="row g-2 mb-2">
            <div className="col">
              <div className="form-floating">
                <input
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
