import React, { Component } from 'react';
import Button from 'material-ui/Button';
import './App.css';

class App extends Component {
  constructor() {
    super();
    // this.onClick.bind(this);
    this.state = {
      choices: [
        { name: "Asian", isSelected: false },
        { name: "Fish", isSelected: false },
        { name: "Italian", isSelected: false },
        { name: "French", isSelected: false },
        { name: "Vegan", isSelected: false },
      ]
    };
  }

  selectButton = () =>
    console.log("Button selected!");

  render() {
    return (
      <div className="App">
        <h1>What do you want to make tonight?</h1>
        <p className="Choices">
          {this.state.choices.map(( choice, index ) => <Button key={index} onClick={this.selectButton}>{choice.name}</Button>)}
        </p>
        <p className="Meals">
          Meal #1
          Meal #2
          Meal #3
          Meal #4
        </p>
      </div>
    );
  }
}

export default App;
