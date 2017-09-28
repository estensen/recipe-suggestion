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
        { name: 'sandwich', isSelected: true },
      ],
      filteredMeals: [

      ]
    };
  }

  componentDidMount() {
    this.filterMeals();
  }

  meals = [
    { name: 'Asian Fish Tacos', tags: ['asian', 'fish'] },
    { name: 'Spagetti Carbonara', tags: ['italian'] },
    { name: 'Cubanos', tags: ['sandwich'] },
  ]

  selectedChoices = () =>
    this.state.choices
      .filter(choice => choice.isSelected === true)
      .map(choice => choice.name);

  filterMeals = () => {
    let choices = this.selectedChoices()
    let tmp = [];
    this.meals.forEach(meal => {
      console.log(meal.tags);
      for (let i = 0; i < meal.tags.length; i++) {
        console.log(choices.includes(meal.tags[i]));
        if (choices.includes(meal.tags[i])) {
          if (i === meal.tags.length - 1) {
            tmp.push(meal)
            this.setState({ filteredMeals: tmp });
          }
        }
      }
    })
  }

  onClick = index => {
    let tmp = this.state.choices;
    tmp[index].isSelected = !tmp[index].isSelected;
    this.setState({ choices: tmp });
    this.filterMeals()
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
        {this.state.filteredMeals.map(meal =>
          <div key={meal.name}>{meal.name}</div>
        )}
        </div>
      </div>
    );
  }
}

export default App;
