import { Fragment } from "react";
import Table from "../ui/Table";
import TableBody from "../ui/TableBody";
import TableHead from "../ui/TableHead";

const People = (props) => {
  const handleOnClickDelete = (id) => {
    props.handleDeletePerson(id);
  };  

  const content = props.people.map((person) => {
    return (
      <tr key={person.id} onClick={() => handleOnClickDelete(person.id)}>
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
    <Fragment>
      <Table className="table table-hover">
        <TableHead headers={["First Name", "Last Name", "Birth Date", "Age"]} />
        <TableBody>{content}</TableBody>
      </Table>      
      <div className="d-grid">{button}</div>
    </Fragment>
  );
};

export default People;
