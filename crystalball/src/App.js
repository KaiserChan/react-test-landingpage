import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor () {
    super();
    this.addComment = this.addComment.bind(this)
    this.displayComment = this.displayComment.bind(this)
    this.state = {
      comment = [],
      display = {
        author: "",
        email: "",
        detail: "",
        interested: ""
      }
    }
  }

  addComment(author, email, detail, interested) {
    let new_comment = {
      author: author,
      email: email,
      detail: detail,
      interested: interested
    }
    this.setState({
      comment: [..this.state.comment, new_comment]
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
