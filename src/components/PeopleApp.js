import { useState, useEffect, useCallback } from "react";
import PersonForm from "./forms/PersonForm";
import People from "./people/People";
import Card from "./ui/Card";
import { createPerson } from "./object-factories/factoryFunctions";
import Spinner from "./ui/Spinner";

const PeopleApp = (props) => {
  const [people, setPeople] = useState([]);
  const [formIsVisible, setFormIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  

  const findAllPeople = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`http://localhost:8080/todo/api/v1/people`);

      const data = await response.json();      

      if (!response.ok) {        
        throw new Error("Something went wrong");
      }

      const peopleList = [];

      for (const person of data._embedded.personDTOList) {
        peopleList.push(
          createPerson(
            person.personId,
            person.firstName,
            person.lastName,
            person.birthDate
          )
        );
      }
      setPeople(peopleList);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    findAllPeople();
  }, [findAllPeople]);

  const handleAddPerson = (person) => {
    setPeople([...people, person]);
  };

  const handleShowForm = () => {
    setFormIsVisible(true);
  };

  const handleHideForm = () => {
    setFormIsVisible(false);
  };

  const handleDeletePerson = (id) => {
    setPeople((previousState) =>
      previousState.filter((person) => person.id !== id)
    );
  };

  return (
    <div className="container">
      {formIsVisible && (
        <Card>
          <PersonForm
            handleHideForm={handleHideForm}
            handleAddPerson={handleAddPerson}
          />
        </Card>
      )}
      <Card>
        {!isLoading && (
          <People
            handleDeletePerson={handleDeletePerson}
            formIsVisible={formIsVisible}
            handleShowForm={handleShowForm}
            people={people}
          />
        )}
        {isLoading && <Spinner />}
      </Card>
    </div>
  );
};

export default PeopleApp;
