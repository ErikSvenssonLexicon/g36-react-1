import Person from "./Person";

const PeopleApp = (props) => {
  const person = {
    id: "foo1",
    name: "Erik Svensson",
    birthDate: "1976-09-11",
  };

  return <div className="container">
      <Person person={person}/>
  </div>;
};

export default PeopleApp;
