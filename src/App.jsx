import React, { Component } from 'react';
import ChildComponent from './childComponent';
import { initialData } from './data';

// Import your dog images
import happyDog from './assets/happydog.jpg';
import sadDog from './assets/saddog.jpg';
// Import your alligator images
import happyGator from './assets/happygator.jpg';
import sadGator from './assets/sadgator.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      characters: initialData.map(char => {
        // Determine starting image based on species
        const isGator = char.species === 'alligator';
        return {
          ...char,
          image: isGator ? happyGator : happyDog, 
          status: isGator ? "See you later!" : "I'm a good dog."
        };
      })
    };
  }

  handleUpdate = (id, mood) => {
    const updatedCharacters = this.state.characters.map(char => {
      if (char.id === id) {
        const isGator = char.species === 'alligator';

        if (mood === 'happy') {
          return { 
            ...char, 
            image: isGator ? happyGator : happyDog, 
            status: isGator ? "Chomp! Happy swamp vibes!" : "Yum! Thanks for the treat!" 
          };
        } else if (mood === 'sad') {
          return { 
            ...char, 
            image: isGator ? sadGator : sadDog, 
            status: isGator ? "In a while... crocodile..." : "Wait... where are you going?" 
          };
        }
      }
      return char;
    });

    this.setState({ characters: updatedCharacters });
  }

  render() {
    return (
      <div className="app-container" style={{ padding: '40px' }}>
        <h1>Pet Kennel with Dog and Gator</h1>
        <div className="children-container" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {this.state.characters.map(char => (
            <ChildComponent 
              key={char.id}
              header={char.name}
              image={char.image}
              content={char.status}
              onAction={(mood) => this.handleUpdate(char.id, mood)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;