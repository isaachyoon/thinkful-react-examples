import React from 'react';
import './Person.css';

function Person(props) { //prop:{id:'', name:''}
  return (
      <div className="person">
        <p>{props.data.id}</p>
        <p>{props.data.name}</p>
      </div>
  );
};

Person.defaultProps = {
  name: 'employee',
  id: '000'
};

export default Person;