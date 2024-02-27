import React from 'react';
import { useState } from 'react';

const DropDownWorker = ({ data, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = (event) => {
        const selectedPerson = data.find(person => person.firstname === event.target.value);
        onSelect(selectedPerson);
        setIsOpen(!isOpen);
    };

    return (
        <div className='company-container'>
            <select className='drop' onChange={handleToggle}>
                {data.map((worker, index) => (
                    <option key={index} value={worker.firstname}>{worker.firstname}</option>
                ))}
            </select>
        </div>
    );
}

export default DropDownWorker;
