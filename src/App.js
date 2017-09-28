import React, { Component } from 'react';
import Button from 'material-ui/Button';
import './App.css';

class App extends Component {
  constructor() {
    super();
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

  onClick = index => {
    let tmp = this.state.choices;
    tmp[index].isSelected = !tmp[index].isSelected;
    this.setState({ choices: tmp });
  }

  render() {
    return (
      <div className="App">
        <h1>What do you want to make tonight?</h1>
        <div className="Choices">
            {this.state.choices.map(( choice, index ) =>
              <Button raised color={choice.isSelected ? "primary" : "default"} key={index} onClick={() => this.onClick(index)}>
                {choice.name}
              </Button>
            )}
        </div>
        <div className="Meals">
          Meal #1
          Meal #2
          Meal #3
          Meal #4
        </div>
      </div>
    );
  }
}

export default App;
