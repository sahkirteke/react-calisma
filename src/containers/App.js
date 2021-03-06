import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
// import styled from "styled-components";


// const StyledButton = styled.button`

// background-color: ${props => props.alt ? `red`: `green`} ;
// color: white;
// font: inherit;
// border: 1px solid blue;
// padding:  8px;
// cursor: pointer;

// &:hover {
//   background-color:${props => props.alt ? `salmon`: `lightgreen`};
//   color: black;
// }

// `;

class App extends Component {

  // constructor (props) {
  //   super(props);
  //   console.log('[App.js] constryuctr');
  
  // }


  state = {
    persons: [
      { id: 'a1',name: "Husam", age: 28 },
      { id: 'a2',name: "Alettin", age: 29 },
      { id: 'a3',name: "Ouz", age: 26 },
    ],
    otherState: "some other value",
    showPersons :false 
  };



  switchNameHandler = (newName) => {
    
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "husamu", age: 29 },
        { name: "Ouz", age: 27 },
      ],
    });
  };

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p=> {
      return p.id===id;
    });

    const person ={
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons =[...this.state.persons];
    persons[personIndex] =person;
    this.setState({
      persons: persons
    });
  };

  deletePersonHandler= (personIndex)=> {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons :persons})
  }
   togglePersonsHandler = ()=> {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow}); 
  }

  render() {
    // const style = {
    //   backgroundColor: "green",
    //   font: "inherit",
    //   border: "1px solid blue",
    //   padding: "8px",
    //   cursor: "pointer",
    // };
    let persons= null; 

    if (this.state.showPersons ){
      persons=
          <Persons  
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          />
          
         
        // {/* <Person
        //   name={this.state.persons[0].name}
        //   age={this.state.persons[0].age}
        // />
        // <Person
        //   name={this.state.persons[1].name}
        //   age={this.state.persons[1].age}
        //   click={this.switchNameHandler.bind(this, "Husam!")}
        //   changed={this.nameChangedHandler}
        // >
        //   My Hobbies: Racing
        // </Person>
        // <Person
        //   name={this.state.persons[2].name}
        //   age={this.state.persons[2].age}
        // /> */}
        
      
      // style.backgroundColor='red';

     
    }

    
    
    return (
      <div className={classes.App}>
        
        <Cockpit 
        title ={this.props.appTitle}
        showPersons={this.state.showPersons}
        persons ={this.state.persons}
        clicked ={this.togglePersonsHandler}
        />
        {persons}

      </div>
      
    );
    
  }
}

export default App;
