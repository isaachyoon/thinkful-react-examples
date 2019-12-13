import React from 'react';
import './Person.css';

class Person extends React.Component { 
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      like: props.data.like
    }
  }
  componentDidMount = () => {
    console.log('componentDidMount()');
  } // Called after component mounts

  componentDidUpdate() {
    console.log('componentDidUpdate()');
  } // Called after each render

  componentWillUnmount() {
    console.log('componentWillUnmount');
  } // Called before component unmounts

  clickHandler(id) {
    let like = this.state.like;
    this.setState({like: like+1});
  }

  render() {
    return (
        <div className="person">
          <p>{this.props.data.id}</p>
          <p>{this.props.data.name}</p>
          {/* {props.children} */}
          <button onClick={() => this.clickHandler()}>like</button>
          <span>{this.state.like}</span>
        </div>
    );
  }
};

Person.defaultProps = {
  name: 'employee',
  id: '000'
};

export default Person;