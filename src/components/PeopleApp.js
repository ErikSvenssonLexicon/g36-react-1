import PersonForm from "./forms/PersonForm";
import Person from "./Person";

const PeopleApp = (props) => {
  const person = {
    id: "foo1",
    firstName: "Erik",
    lastName: "Svensson",
    birthDate: "1976-09-11",
    getAge() {
      const today = new Date();
      const date = new Date(this.birthDate);

      let age = today.getFullYear() - date.getFullYear();
      const months = today.getMonth() - date.getMonth();
      if (months < 0 || (months === 0 && today.getDate() < date.getDate())) {
        age--;
      }
      return age;
    },
  };

  return (
    <div className="container">
      <PersonForm />
      <Person person={person} />
    </div>
  );
};

export default PeopleApp;
