// DropDownBox.js
import React, { useState } from "react";
import data from "../../person.json";
import DownMenuButton from "./DownMenuButton";

const DetailsDropDownBox = () => {
  const persons = data.person;
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleSelectPerson = (selectedPersonName) => {
    setSelectedPerson(selectedPersonName);
    setShowDetails(true);
  };

  return (
    <div className="persons">
      <h2>Persons</h2>
      {!showDetails && (
        <DownMenuButton
          data={persons}
          onSelect={handleSelectPerson}
        />
      )}
      {selectedPerson && showDetails && (
        <div className="selected-person">
          <h3>Selected Person: {selectedPerson}</h3>
          <p>
            Details:
            {persons.map(
              (person) =>
                person.name === selectedPerson && (
                  <div key={person.name}>
                    <p>Name: {person.name}</p>
                    <p>Age: {person.age}</p>
                    <p>Hobby: {person.hobby}</p>
                  </div>
                )
            )}
          </p>
        </div>
      )}
    </div>
  );
};

export default DetailsDropDownBox;
