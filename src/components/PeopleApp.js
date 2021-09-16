import {useState} from 'react';
import PersonForm from "./forms/PersonForm";
import Person from "./Person";

const person = {
  id: 34252,
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

const PeopleApp = (props) => {

  const [people, setPeople] = useState([person])


  const handleAddPerson = (person) =>{    
    setPeople([...people, person])  
  }

  

  return (
    <div className="container">
      <PersonForm handleAddPerson={handleAddPerson} />      
    </div>
  );
};

export default PeopleApp;
