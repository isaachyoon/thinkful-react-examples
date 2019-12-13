import React from 'react';
import Person from '../Person/Person';
import './PersonList.css';

function PersonList() {
  const peopleData = [
      { id: '001', name: 'Rich'},
      { id: '002', name: 'Joe' },
      { id: '003', name: 'Chris'}, 
      { id: '004', name: 'Tauhida' },
      { id: '005', name: 'Elias' }, 
      { id: '006', name: 'Rita' }
  ];

  const people = peopleData.map((person, i) =>
      <Person key={i} />
  );
  
  return (
    <div className="personList">
      <h3>Person List</h3>
      <div className="container">
        {people}
      </div>
    </div>
  );
};

export default PersonList;