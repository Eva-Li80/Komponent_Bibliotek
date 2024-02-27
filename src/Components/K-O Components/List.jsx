import React from 'react';
import "./styles/listcontainer.css"

const List = ({data}) => {
  return (
    <div className='list-container'>
      <ul className="list-ul">
        {data.map((info, index) => (
          <li className='list-li' key={index}><h2>Name: {info.name} </h2>{info.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
