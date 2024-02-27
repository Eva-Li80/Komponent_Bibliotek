
import React, { useState } from "react";
import data from "../../person.json"
import DownMenuButton from "./DownMenuButton";

const DropDownBox = () => {

  const persons = data.person;
  
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handleSelectPerson = (selectedPersonName) => {
    setSelectedPerson(selectedPersonName);
  };

  return (
    <div className="persons">
      <h2>Persons</h2>
      <DownMenuButton data={persons} onSelect={handleSelectPerson} />
      {selectedPerson && (
        <div className="selected-person">
          <h3>Selected Person: {selectedPerson}</h3>
          <p>
            Details:
            {persons.map((person) =>
              person.name === selectedPerson ? (
                <div key={person.name}>
                  <p>Name: {person.name}</p>
                  <p>Age: {person.age}</p>
                  <p>Hobby: {person.hobby}</p>
                </div>
              ) : null
            )}
          </p>
        </div>
      )}
    </div>
  );
};

export default DropDownBox;
