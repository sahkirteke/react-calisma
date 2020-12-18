import React, { Component } from "react";

import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
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
      },
    ],
    otherState: "bazı değerler içün",
  };
  switchNameHandler = () => {
    // console.log('tıklandınız');
    // this.state.person[0].name = 'eleeetttin';
    this.setState({
      persons: [
        {
          name: "Eleeetttinnn",
          age: 27,
        },
        {
          name: "husamettin",
          age: 25,
        },
        {
          name: "ouz",
          age: 15,
        },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React projesine hoşgeldiniz</h1>
        <h1>selam</h1>
        <button onClick={this.switchNameHandler}>isim değiştir.</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          mahallemin ağaçlarını severim
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    //  return   React.createElement('div',{className:'App'} , React.createElement('h2',null , 'react projesi calisti'));
  }
}

export default App;
