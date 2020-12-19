import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Husam", age: 28 },
      { name: "Alettin", age: 29 },
      { name: "Ouz", age: 26 },
    ],
    otherState: "some other value",
    showPersons :false 
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "husamu", age: 29 },
        { name: "Ouz", age: 27 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "husamm", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Ouz", age: 26 },
      ],
    });
  };
   togglePersonsHandler = ()=> {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow}); 
  }

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };
    let persons= null;
    if (this.state.showPersons ){
      persons= (
        <div>
          {this.state.persons.map(person => {
            return <Person name ={person.name} 
            age={person.age}/>
          })}
        {/* <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Husam!")}
          changed={this.nameChangedHandler}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        /> */}
        </div> 
      )
    }
    return (
      <div className="App">
        <h1>React projem</h1>
        <h2>Selam</h2>
        <button
          style={style}
          onClick={this.togglePersonsHandler}
        >
          Göster kendini
        </button>
        {persons}
      </div>
    );
    
  }
}

export default App;
