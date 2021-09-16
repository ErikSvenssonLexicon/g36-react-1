const People = (props) => {  

  const content = props.people.map((person) => {
    return (
      <tr key={person.id}>
        <td>{person.firstName}</td>
        <td>{person.lastName}</td>
        <td>{person.birthDate}</td>
        <td>{person.getAge()}</td>
      </tr>
    );
  });

  const button = !props.formIsVisible ? (
    <button onClick={props.handleShowForm} className="btn btn-primary">
      Add new person
    </button>
  ) : (
    <button className="btn btn-primary" disabled>
      Add new person
    </button>
  );

  return (
    <div className="card">
      <div className="card-body">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Birth Date</th>
              <th scope="col">Age</th>
            </tr>
          </thead>
          <tbody>{content}</tbody>
        </table>
        <div className="d-grid">
          {button}
        </div>
      </div>
    </div>
  );
};

export default People;
