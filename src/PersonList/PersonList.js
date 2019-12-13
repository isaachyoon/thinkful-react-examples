import React from 'react';
import Person from '../Person/Person';
import './PersonList.css';

let peopleData = [
  { id: '001', name: 'Rich', like: 0},
  { id: '002', name: 'Joe', like: 0},
  { id: '003', name: 'Chris', like: 0}, 
  { id: '004', name: 'Tauhida', like: 0},
  { id: '005', name: 'Elias', like: 0}, 
  { id: '006', name: 'Rita', like: 0}
];

class PersonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: peopleData
    }
  }


  clickHandler(id) {
    console.log(id)
    const newData = peopleData.map((person) => {
      if (person.id === id) {
        person.like += 1;
        console.log(person.like)
      }
    })
    this.setState({data: newData});
  }

  deleteLastComponent() {
    console.log('hi');
    peopleData = peopleData.slice();
    peopleData.pop();
    console.log(peopleData);
    this.setState({data: peopleData});
  }

  //this.peopleData
  render() {
    const people = this.state.data.map((person, i) =>
      <Person key={i} data={person}>
        {/* <button onClick={() => this.clickHandler(person.id)}>like</button> */}
        {/* <span>{person.like}</span> */}
      </Person>
    );
    return (
      <div className="personList">
        <h3>Person List</h3>
        <div className="container">
          {people}
        </div>
        <button onClick={() => this.deleteLastComponent()}>Delete</button>
      </div>
    )
  }
};

export default PersonList;