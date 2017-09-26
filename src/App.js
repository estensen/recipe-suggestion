import React, { Component } from 'react';
import Button from 'material-ui/Button';
import './App.css';

class App extends Component {

  selectButton = () =>
    console.log("Button selected!");

  choices = [
    "Asian",
    "Fish",
    "Italian",
    "French",
    "Vegan"
  ];

  listChoices = this.choices.map((choice) =>
    <Button onClick={this.selectButton}>{choice}</Button>
  );

  render() {
    return (
      <div className="App">
        <h1>What do you want to make tonight?</h1>
        <p className="Choices">
          {this.listChoices}
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
