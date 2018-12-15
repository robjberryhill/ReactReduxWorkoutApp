import React, { Component } from 'react';
import './App.css';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
let APIUrl = "https://jsonplaceholder.typicode.com/posts";
class App extends React.Component {
  state = {
    exercises: [],
    errors: null
  };

  componentDidMount() {
    fetch(APIUrl)
      .then(r => r.json())
      .then(p => {
        let first10 = p.filter((i, index) => index < 10);
        console.log(first10);
        this.setState({exercises: first10})
      })
      .catch(err => this.setState({ error: err }));
  }

  render() {
    return (
      <div class="App">
        {this.state.exercises.map(p => (
          <p key={p.id}>{p.title}</p>
        ))}
      </div>
    );
  }
}

export default App;
