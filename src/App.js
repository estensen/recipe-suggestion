import React, { Component } from 'react';
import Button from 'material-ui/Button';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      choices: [
        { name: 'asian', isSelected: true },
        { name: 'fish', isSelected: false },
        { name: 'italian', isSelected: false },
        { name: 'sandwich', isSelected: false },
      ]
    };
  }

  meals = [
    { name: 'Asian Fish Tacos', tags: ['asian', 'fish'] },
    { name: 'Spagetti Carbonara', tags: ['italian'] },
    { name: 'Cubanos', tags: ['sandwich'] },
  ]

  selectedChoices = () =>
    console.log(this.state.choices
      .filter(choice => choice.isSelected === true)
      .map(choice => choice.name)
    );

  onClick = index => {
    let tmp = this.state.choices;
    tmp[index].isSelected = !tmp[index].isSelected;
    this.setState({ choices: tmp });
  }

  render() {
    return (
      <div className='App'>
        <h1>What do you want to make tonight?</h1>
        <div className='Choices'>
            {this.state.choices.map(( choice, index ) =>
              <Button raised color={choice.isSelected ? 'primary' : 'default'} key={index} onClick={() => this.onClick(index)}>
                {choice.name}
              </Button>
            )}
        </div>
        <div className='Meals'>
        {this.meals.map(meal =>
          <div key={meal.name}>{meal.name}</div>
        )}
        </div>
        <div>
          {this.selectedChoices()}
        </div>
      </div>
    );
  }
}

export default App;
