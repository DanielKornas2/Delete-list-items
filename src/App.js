import React, { Component } from 'react';

const Person = (props) => {
  return (
    <li>{props.name}<button onClick={props.handleClick}>Usuń</button></li>
  )
}

class List extends Component {
  constructor(props){
    super(props);
    this.state = {
      people : [
        {
          id: 1,
          name: "Marek Kowalski",
        },
        {
          id: 2,
          name: "Edyta Nowak",
        },
        {
          id: 3,
          name: "Marta xyz",
        },
      ]
      
    }
  }

  handleClick = () => {
    console.log('click')
  }

  render() {
    console.log(this.state.people[1].id)
    return (
      <ul>
        {this.state.people.map(item => <Person key={item.id} name={item.name} handleClick={this.handleClick} />)}     
      </ul>
      
    );
  }
}

export default List;
