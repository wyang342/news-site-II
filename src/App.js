import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        {
          label: "HOME",
          value: "home"
        },
        {
          label: "OPINION",
          value: "opinion"
        },
        {
          label: "WORLD",
          value: "world"
        },
        {
          label: "NATIONAL",
          value: "national"
        },
        {
          label: "POLITICS",
          value: "politics"
        },
        {
          label: "UPSHOT",
          value: "upshot"
        },
        {
          label: "NY REGION",
          value: "nyregion"
        },
        {
          label: "BUSINESS",
          value: "business"
        }
      ]
    }
  }
  render() {
    return (
      <Nav navItems={this.state.navItems} handleNavClick={(clickedItem) => console.log(clickedItem)} />
    );
  }
}

export default App;
