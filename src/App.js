import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>What do you want to make tonight?</h1>
        <p className="Choices">
          Asian
          Fish
          Italian
          French
          Vegan
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
