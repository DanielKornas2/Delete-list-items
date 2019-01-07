import React, { Component } from 'react';

const Person = (props) => {
  return (
    <li key={props.id}>{props.name}<button onClick={props.handleClick}>Usuń</button></li>
  )
}

class List extends Component {
  constructor(props){
    super(props);
    this.state = {
      people : [
        {
          id: 0,
          name: "Marek Kowalski",
        },
        {
          id: 1,
          name: "Edyta Nowak",
        },
        {
          id: 2,
          name: "Marta xyz",
        },
      ]
      
    }
  }

  handleClick = (id) => {
    const people = [...this.state.people];
    const index = people.findIndex(person => person.id === id)
    people.splice(index,1);
    this.setState({
      people
    })
  }

  render() {
    return (
      <ul>
        {this.state.people.map(item => <Person key={item.id} name={item.name} handleClick={() => this.handleClick(item.id)} />)}     
      </ul>
      
    );
  }
}

export default List;
