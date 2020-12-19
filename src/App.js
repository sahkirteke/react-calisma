import React, { useState } from "react"; 
import { render } from "react-dom";
import "./App.css";
import Person from "./Person/Person";

const app = props => {

  const [personsState , setPersonsState] =useState({
    persons: [
      {
        name: "Alattin",
        age: 27,
      },
      {
        name: "husamettin",
        age: 25,
      },
      {
        name: "ouz",

        age: 125,
      }
    ]
    
  });

  const [otherState, setOtherState]= useState('bazı değişmeler');

  console.log(personsState, otherState);

  const switchNameHandler = (newName) => {
    // console.log('tıklandınız');
    // this.state.person[0].name = 'eleeetttin';
    setPersonsState({
      persons: [
        {
          name: newName,
          age: 27,
        },
        {
          name: "husaddddettin",
          age: 25,
        },
        {
          name: "ouz",
          age: 15,
        },
      ],
      otherState: personsState.otherState
    });
  };
 
  const nameChangedHandler = (event) => {


    setPersonsState({
       persons: [
        {
          name: "aloş",
          age: 27,
        },
        {
          name: event.target.value,
          age: 25,
        },
        {
          name: "ouz",
          age: 28,
        },
      ],

    })
  }
  
    return (
      <div className="App">
        <h1>React projesine hoşgeldiniz</h1>
        <h1>selam</h1>
        <button onClick={switchNameHandler.bind(this, 'eleeeetddiin')}>isim değiştir.</button>
        <Person
          name={personsState.persons[0].name}
          age={personsState.persons[0].age}
        />
        <Person
          name={personsState.persons[1].name}
          age={personsState.persons[1].age}
          click={switchNameHandler.bind(this, 'eleeeetssssddiin')}
          changed ={nameChangedHandler}>mahallemin ağaçlarını severim
        </Person>
        <Person
          name={personsState.persons[2].name}
          age={personsState.persons[2].age}
        />
      </div>
    );
    //  return   React.createElement('div',{className:'App'} , React.createElement('h2',null , 'react projesi calisti'));
  
}

export default app;


