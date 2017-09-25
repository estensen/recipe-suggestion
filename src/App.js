import React, { Component } from 'react';
import Button from 'material-ui/Button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>What do you want to make tonight?</h1>
        <p className="Choices">
          <Button>Asian</Button>
          <Button>Fish</Button>
          <Button>Italian</Button>
          <Button>French</Button>
          <Button>Vegan</Button>
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
