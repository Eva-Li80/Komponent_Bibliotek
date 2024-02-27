import React from 'react';
import data from "../../company.json";
import DropDownWorker from './DropDownWorker';
import { useState } from 'react';
import Card from './Card';
import "./styles/aboutworker.css"

const AboutWorker = () => {
    const workers = data.construction_workers;
    const [selectedWorker, setSelectedWorker] = useState(null);
    const [showDetails, setShowDetails] = useState(false);

    const handleSelectWorker = (selectedWorker) => {
        setSelectedWorker(selectedWorker);
        setShowDetails(true);
    };

    return (
        <div className="worker">
            <h2>Workers</h2>
            {!showDetails && (
                <DropDownWorker data={workers} onSelect={handleSelectWorker} />
            )}
            {selectedWorker && showDetails && (
                <div className="selected-worker">
                  <Card>
                  <h3 className='selected'>Selected Worker: {selectedWorker.firstname}</h3>
                    <p  className="about">
                        Details:
                        <div key={selectedWorker.firstname}>
                            <p>Name: {selectedWorker.firstname}</p>
                            <p>Last Name: {selectedWorker.lastname}</p>
                            <p>Pant Color: {selectedWorker.pant_color}</p>
                            <p>Favorite Food: {selectedWorker.favorite_food.join(', ')}</p>
                            <p>Favorite Tool: {selectedWorker.favorite_tool}</p>
                            <p>Pet: {selectedWorker.pet}</p>
                            <p>Hobby: {selectedWorker.hobby.join(', ')}</p>
                        </div>
                    </p>
                  </Card>
                </div>
            )}
        </div>
    );
}

export default AboutWorker;
