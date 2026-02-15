import React, { Component } from 'react';
import ChildComponent from './childComponent';
import { initialData } from './data';

// Import your dog images
import happyDog from './assets/happydog.jpg';
import sadDog from './assets/saddog.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      characters: initialData.map(char => ({
        ...char,
        image: happyDog, // Start happy!
        status: "I'm a good dog."
      }))
    };
  }

  handleUpdate = (id, mood) => {
    const updatedCharacters = this.state.characters.map(char => {
      if (char.id === id) {
        if (mood === 'happy') {
          return { ...char, image: happyDog, status: "Yum! Thanks for the treat!" };
        } else if (mood === 'sad') {
          return { ...char, image: sadDog, status: "Wait... where are you going?" };
        }
      }
      return char;
    });

    this.setState({ characters: updatedCharacters });
  }

  render() {
    return (
      <div className="app-container" style={{ padding: '40px' }}>
        <h1>Pet Kennel</h1>
        <div className="children-container" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {this.state.characters.map(char => (
            <ChildComponent 
              key={char.id}
              header={char.name}
              image={char.image}
              content={char.status}
              // Pass the function with the ID so the parent knows WHICH dog to update
              onAction={(mood) => this.handleUpdate(char.id, mood)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;