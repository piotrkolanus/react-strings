import React, { Component } from 'react';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    userInput: '',
  };

  inputChangedHandler = event => {
    this.setState({ userInput: event.target.value });
  };

  deleteCharHandler = index => {
    const word = this.state.userInput.split('');
    word.splice(index, 1);
    const updatedWord = word.join('');
    this.setState({ userInput: updatedWord });
  };

  render() {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return (
        <Char
          character={ch}
          key={index}
          clicked={() => this.deleteCharHandler(index)}
        />
      );
    });
    return (
      <div>
        <p>Strings</p>
        <input type="text" onChange={this.inputChangedHandler} />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
