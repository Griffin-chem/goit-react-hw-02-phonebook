import React, { Component } from 'react';
import './App.css';

import { v4 as uuidv4 } from 'uuid'; 

class App extends Component {

  state = {
    contacts: [],
    name: ''
  };

  handleChange = (evt) => {
    this.setState({name: evt.target.value});
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(this.state.contacts);
    if (this.state.name === "") {return};
    const contact = {
      id: uuidv4(),
      name: this.state.name
    };
    this.setState({contacts: [...this.state.contacts, contact]});
    this.setState({name: ''});
  }

  render() {
  const { name } = this.state;
  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={this.handleSubmit}>
        <label>Name</label>
        <input type="text" value={name} placeholder="Input name..." onChange={this.handleChange}></input>
        <button type="submit">Add contact</button>
      </form>
      <h2>Contacts</h2>
      <ul className="contactList">
       {this.state.contacts.map(({ id, name }) => (<li key={id}>{name}</li>))}
      </ul>
    </div>
  )}
}

export default App;
