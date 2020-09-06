import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    contacts: [],
    name: ''
  };

  handleChange = (evt) => {
    this.setState({name: evt.target.value});
  }

  render() {
  const { name } = this.state;
  return (
    <div>
      <h1>Phonebook</h1>
      <form>
        <label>Name</label>
        <input type="text" value={name} placeholder="Input name..." onChange={this.handleChange}></input>
        <button type="submit">Add contact</button>
      </form>
      <h2>Contacts</h2>
      <ul className="contactList">

      </ul>
    </div>
  )}
}

export default App;
